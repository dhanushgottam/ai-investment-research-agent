export default function ThinkingMessage() {
  return (
    <div className="message-row message--assistant animate-fadeIn">
      <div className="avatar bg-emerald-600 text-lg">🤖</div>

      <div className="bubble assistant">
        <div className="flex items-center gap-3">
          <span className="text-slate-300">Thinking</span>

          <div className="flex gap-1">
            <span className="h-2 w-2 animate-bounce rounded-full bg-white" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-white" style={{ animationDelay: "0.2s" }} />
            <span className="h-2 w-2 animate-bounce rounded-full bg-white" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>
    </div>
  );
}