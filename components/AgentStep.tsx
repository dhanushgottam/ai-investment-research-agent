interface AgentStepProps {
  name: string;
  completed: boolean;
}

export default function AgentStep({
  name,
  completed,
}: AgentStepProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 p-4">
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold ${
          completed
            ? "bg-green-500 text-white"
            : "bg-slate-700 text-slate-300"
        }`}
      >
        {completed ? "✓" : "..."}
      </div>

      <span className="text-slate-200">
        {name}
      </span>
    </div>
  );
}