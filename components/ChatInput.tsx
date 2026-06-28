"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";

interface Props {
  onSend(message: string): void;
}

export default function ChatInput({ onSend }: Props) {
  const [message, setMessage] = useState("");

  function send() {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  }

  return (
    <div className="sticky bottom-4 w-full">

      <div className="relative rounded-[30px] border border-slate-700 bg-[#2f2f2f] shadow-2xl">

        <textarea
          rows={1}
          value={message}
          placeholder="Ask about any company or finance topic..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
          className="
          min-h-[64px]
          max-h-48
          w-full
          resize-none
          rounded-[30px]
          bg-transparent
          py-5
          pl-6
          pr-20
          text-white
          placeholder:text-slate-400
          outline-none
          "
        />

        <button
          onClick={send}
          disabled={!message.trim()}
          className="
          absolute
          bottom-3
          right-3
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          bg-emerald-500
          text-white
          transition
          hover:bg-emerald-400
          disabled:bg-slate-600
          disabled:cursor-not-allowed
          "
        >
          <ArrowUp size={18} />
        </button>

      </div>

    </div>
  );
}