import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { buildChatSystemPrompt } from "@/lib/chat-context";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const MAX_MESSAGES = 20;
const MAX_MESSAGE_LENGTH = 2000;

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const { ok, retryAfter } = checkRateLimit(ip);
  if (!ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: retryAfter ? { "Retry-After": String(retryAfter) } : {},
      }
    );
  }

  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Chat service is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const messages: ChatMessage[] = body.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required." },
        { status: 400 }
      );
    }

    if (messages.length > MAX_MESSAGES) {
      return NextResponse.json(
        { error: "Conversation is too long." },
        { status: 400 }
      );
    }

    if (messages.some((m) => !m.content || m.content.length > MAX_MESSAGE_LENGTH)) {
      return NextResponse.json(
        { error: "Message is too long." },
        { status: 400 }
      );
    }

    const lastMessage = messages[messages.length - 1];
    if (lastMessage.role !== "user" || !lastMessage.content?.trim()) {
      return NextResponse.json(
        { error: "Last message must be a non-empty user message." },
        { status: 400 }
      );
    }

    const openai = new OpenAI({ apiKey });
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: buildChatSystemPrompt() },
        ...messages.map((msg) => ({
          role: msg.role,
          content: msg.content,
        })),
      ],
    });

    const reply = completion.choices[0]?.message?.content?.trim();
    if (!reply) {
      return NextResponse.json(
        { error: "Failed to get a response. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to get a response. Please try again." },
      { status: 500 }
    );
  }
}
