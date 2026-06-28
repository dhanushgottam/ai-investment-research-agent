"use client";

import { useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

interface Props {
  onSend(message: string): void;
}

export default function ChatInput({ onSend }: Props) {
  const [message, setMessage] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function autoResize() {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "0px";
    textarea.style.height = Math.min(textarea.scrollHeight, 180) + "px";
  }

  function send() {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "56px";
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4">

      <div className="relative overflow-hidden rounded-[30px] border border-slate-700 bg-slate-800 shadow-xl">

        <textarea
          ref={textareaRef}
  rows={1}
  value={message}
  placeholder="Ask about any company or finance topic..."
  onChange={(e) => {
    setMessage(e.target.value);
    autoResize();
  }}
  onKeyDown={(e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }}
  style={{
    height: "56px",
    paddingTop: "16px",
    paddingBottom: "16px",
    lineHeight: "24px",
  }}
  className="
    block
    w-full
    resize-none
    overflow-hidden
    bg-transparent
    px-6
    pr-20
    text-base
    text-white
    placeholder:text-slate-400
    outline-none
    border-none
    appearance-none
  "
        />

        <button
          onClick={send}
          disabled={!message.trim()}
          className="
            absolute
            right-3
            bottom-3
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-emerald-500
            text-white
            transition-all
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