
"use client";

import { useEffect, useRef, useState } from "react";

const suggestions = [
  "Who is Bedaso?",
  "What projects has he built?",
  "What technologies does he use?",
  "How can I contact him?",
];

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm Bedaso's AI assistant. Ask me about his skills, projects, experience, or how to get in touch.",
    },
  ]);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  async function sendMessage(text = message) {
    const question = text.trim();

    if (!question || loading) return;

    setMessage("");

    setMessages((previous) => [
      ...previous,
      { role: "user", content: question },
    ]);

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: question }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't connect to the assistant right now. Please try again.",
        },
      ]);

      console.error("Chat error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen && (
        <section
          className="mb-4 flex h-[min(570px,calc(100dvh-120px))] w-[min(390px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0e0f14] shadow-[0_20px_80px_rgba(0,0,0,0.65)]"
          aria-label="Bedaso AI assistant"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#12131b] px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-400">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                >
                  <path d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
                  <circle cx="12" cy="12" r="5" />
                </svg>
              </div>

              <div>
                <h3 className="font-serif text-base text-white">
                  Bedaso's Assistant
                </h3>
                <p className="mt-0.5 flex items-center gap-1.5 text-[10px] tracking-wider text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  AI PORTFOLIO GUIDE
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="m18 6-12 12M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            <div className="mb-5 text-center text-[10px] tracking-[0.2em] text-slate-600">
              BEDASO DERSU · PORTFOLIO AI
            </div>

            {messages.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  item.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    item.role === "user"
                      ? "rounded-br-sm bg-blue-600 text-white"
                      : "rounded-bl-sm border border-white/10 bg-[#181926] text-slate-200"
                  }`}
                >
                  {item.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm border border-white/10 bg-[#181926] px-4 py-3 text-sm text-slate-400">
                  <span className="animate-pulse">
                    Thinking...
                  </span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="px-4 pb-3">
              <p className="mb-2 text-[10px] uppercase tracking-widest text-slate-500">
                Suggested questions
              </p>

              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => sendMessage(suggestion)}
                    disabled={loading}
                    className="rounded-full border border-white/10 px-3 py-2 text-xs text-slate-300 transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-300 disabled:opacity-50"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
            className="border-t border-white/10 bg-[#12131b] p-3"
          >
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#090a0e] px-3 py-2 focus-within:border-blue-500/50">
              <input
                ref={inputRef}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Ask me about Bedaso..."
                maxLength={1000}
                disabled={loading}
                className="min-w-0 flex-1 bg-transparent py-1 text-sm text-white outline-none placeholder:text-slate-600 disabled:opacity-50"
              />

              <button
                type="submit"
                disabled={!message.trim() || loading}
                aria-label="Send message"
                className="rounded-lg bg-blue-600 p-2 text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                >
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
            </div>

            <p className="mt-2 text-center text-[9px] text-slate-600">
              Powered by a Python machine learning system
            </p>
          </form>
        </section>
      )}

      {/* Floating button */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
          className="group flex h-14 w-14 items-center justify-center rounded-full border border-blue-400/30 bg-blue-600 text-white shadow-[0_0_35px_rgba(37,99,235,0.35)] transition duration-300 hover:scale-105 hover:bg-blue-500"
        >
          {isOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-6 w-6 transition group-hover:rotate-12"
            >
              <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
