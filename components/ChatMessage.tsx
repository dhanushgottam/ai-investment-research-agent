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
    <div
      className={`flex w-full ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-3xl rounded-2xl px-5 py-4 shadow-md ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-slate-900 border border-slate-700 text-slate-100"
        }`}
      >
        <p className="whitespace-pre-wrap leading-7">
          {message}
        </p>
      </div>
    </div>
  );
}