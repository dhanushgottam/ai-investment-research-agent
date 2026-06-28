export default function ThinkingMessage() {
  const steps = [
    "Company Agent",
    "Financial Agent",
    "Research Agent",
    "Decision Agent",
  ];

  return (
    <div className="w-full rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <div className="mb-6 flex items-center gap-2">
        <div className="h-3 w-3 animate-pulse rounded-full bg-blue-500"></div>

        <h2 className="text-lg font-semibold text-white">
          Thinking...
        </h2>
      </div>

      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step}
            className="flex items-center gap-3 text-slate-300"
          >
            <div className="h-2 w-2 rounded-full bg-green-500"></div>

            <span>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}