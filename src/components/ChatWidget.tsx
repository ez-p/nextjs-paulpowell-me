"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME: Message = {
  role: "assistant",
  content:
    "Hi! I'm Paul's AI assistant. Ask me about his career, technical background, hobbies, or personal interests.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener("open-chat", openChat);
    return () => window.removeEventListener("open-chat", openChat);
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMessage: Message = { role: "user", content: trimmed };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to get a response");
      }

      setMessages([...nextMessages, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-dark-navy/40 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {open && (
          <div className="flex h-[min(560px,calc(100vh-6rem))] w-[min(400px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated shadow-2xl shadow-black/50">
            <div className="flex items-center justify-between border-b border-white/5 bg-dark-navy/80 px-5 py-4">
              <div>
                <p className="font-display text-sm font-bold text-white">
                  Ask About Paul
                </p>
                <p className="text-xs text-gray-text">Powered by Gemini</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-gray-text transition-colors hover:bg-white/5 hover:text-white"
                aria-label="Close chat"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "rounded-br-md bg-blue-primary text-white"
                        : "rounded-bl-md border border-white/5 bg-dark-navy/60 text-gray-text"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-md border border-white/5 bg-dark-navy/60 px-4 py-3">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-accent-yellow [animation-delay:0ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-accent-yellow [animation-delay:150ms]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-accent-yellow [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-400">
                  {error}
                </p>
              )}

              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-white/5 bg-dark-navy/80 p-4"
            >
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={loading}
                  placeholder="Ask about Paul's career or interests..."
                  className="flex-1 rounded-lg border border-white/10 bg-dark-navy/60 px-3 py-2.5 text-sm text-white disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="rounded-lg bg-purple-secondary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-purple-secondary/90 disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send message"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 rounded-full bg-purple-secondary px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-secondary/30 transition-all hover:bg-purple-secondary/90 hover:shadow-purple-secondary/40"
          aria-label={open ? "Close chat" : "Open chat"}
        >
          {open ? (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              Close
            </>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              Ask AI
            </>
          )}
        </button>
      </div>
    </>
  );
}
