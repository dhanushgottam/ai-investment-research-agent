"use client";

import { useState } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = message.trim();

    if (!text) return;

    onSend(text);

    setMessage("");
  };

  return (
    <div className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-lg">
      <div className="flex items-center gap-3">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Ask anything... e.g. Should I invest in Apple?"
          className="flex-1 bg-transparent text-white placeholder:text-slate-500 outline-none"
        />

        <button
          onClick={handleSend}
          className="rounded-xl bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-500"
        >
          ↑
        </button>
      </div>
    </div>
  );
}