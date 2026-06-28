export default function ThinkingMessage() {
  return (
    <div className="flex items-start gap-3 animate-fadeIn">

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-lg">
        🤖
      </div>

      <div className="rounded-2xl bg-slate-800 px-5 py-4">

        <div className="flex items-center gap-2">

          <span className="text-slate-300">
            Thinking
          </span>

          <div className="flex gap-1">

            <span className="h-2 w-2 animate-bounce rounded-full bg-white" />

            <span
              className="h-2 w-2 animate-bounce rounded-full bg-white"
              style={{
                animationDelay: "0.2s",
              }}
            />

            <span
              className="h-2 w-2 animate-bounce rounded-full bg-white"
              style={{
                animationDelay: "0.4s",
              }}
            />

          </div>

        </div>

      </div>

    </div>
  );
}