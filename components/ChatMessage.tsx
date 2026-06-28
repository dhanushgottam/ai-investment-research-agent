interface ChatMessageProps {
  role: "user" | "assistant";
  message: string;
}

export default function ChatMessage({
  role,
  message,
}: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`message-row ${isUser ? "message--user" : "message--assistant"}`}>
      {!isUser && (
        <div className="avatar bg-slate-800 text-slate-200">🤖</div>
      )}

      <div className={`bubble ${isUser ? "user" : "assistant"}`}>
        <p className="whitespace-pre-wrap leading-7">
          {message}
        </p>
      </div>

      {isUser && <div className="avatar bg-blue-600 text-white">U</div>}
    </div>
  );
}