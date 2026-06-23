import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildChatSystemPrompt } from "@/lib/chat-context";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function sanitizeHistory(messages: ChatMessage[]): ChatMessage[] {
  let history = messages.slice(0, -1);
  while (history.length > 0 && history[0].role === "assistant") {
    history = history.slice(1);
  }
  return history;
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;
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

    const lastMessage = messages[messages.length - 1];
    if (lastMessage.role !== "user" || !lastMessage.content?.trim()) {
      return NextResponse.json(
        { error: "Last message must be a non-empty user message." },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: buildChatSystemPrompt(),
    });

    const history = sanitizeHistory(messages).map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({ history });
    const result = await chat.sendMessage(lastMessage.content.trim());
    const reply = result.response.text();

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to get a response. Please try again." },
      { status: 500 }
    );
  }
}
