import { InvestmentDecision } from "@/types/graphState";

interface RecommendationCardProps {
  company: string;
  recommendation: InvestmentDecision;
}

export default function RecommendationCard({
  company,
  recommendation,
}: RecommendationCardProps) {
  const badgeStyle =
    recommendation.decision === "BUY"
      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
      : recommendation.decision === "SELL"
      ? "bg-red-500/20 text-red-400 border border-red-500/30"
      : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30";

  return (
    <div className="flex w-full justify-start">
      <div className="w-full rounded-2xl border border-slate-700 bg-slate-900/90 p-6 shadow-lg backdrop-blur">

        {/* AI Header */}
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-lg">
            🤖
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              AI Investment Analysis
            </p>

            <p className="text-xs text-slate-400">
              Generated using LangGraph + Gemini
            </p>
          </div>
        </div>

        {/* Company + Badge */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">
              {company}
            </h2>

            <p className="text-slate-400">
              Investment Recommendation
            </p>
          </div>

          <div
            className={`rounded-full px-5 py-2 text-sm font-bold ${badgeStyle}`}
          >
            {recommendation.decision}
          </div>
        </div>

        {/* Confidence */}
        <section className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold text-white">
              📊 Confidence Score
            </h3>

            <span className="font-bold text-blue-400">
              {recommendation.confidence}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-700">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700"
              style={{
                width: `${recommendation.confidence}%`,
              }}
            />
          </div>
        </section>

        {/* Overview */}
        <section className="mb-8">
          <h3 className="mb-3 text-lg font-semibold text-white">
            📄 Overview
          </h3>

          <p className="leading-8 text-slate-300">
            {recommendation.overview}
          </p>
        </section>

        {/* Financial Analysis */}
        <section className="mb-8">
          <h3 className="mb-3 text-lg font-semibold text-white">
            💰 Financial Analysis
          </h3>

          <p className="leading-8 text-slate-300">
            {recommendation.financialAnalysis}
          </p>
        </section>

        {/* Strengths */}
        <section className="mb-8">
          <h3 className="mb-4 text-lg font-semibold text-emerald-400">
            ✅ Strengths
          </h3>

          <ul className="space-y-3">
            {recommendation.strengths.map((item, index) => (
              <li
                key={index}
                className="flex gap-3 text-slate-300"
              >
                <span>✔️</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Risks */}
        <section className="mb-8">
          <h3 className="mb-4 text-lg font-semibold text-red-400">
            ⚠️ Risks
          </h3>

          <ul className="space-y-3">
            {recommendation.risks.map((item, index) => (
              <li
                key={index}
                className="flex gap-3 text-slate-300"
              >
                <span>🔻</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* AI Reasoning */}
        <section>
          <h3 className="mb-3 text-lg font-semibold text-white">
            🧠 AI Reasoning
          </h3>

          <p className="leading-8 text-slate-300">
            {recommendation.reasoning}
          </p>
        </section>
      </div>
    </div>
  );
}