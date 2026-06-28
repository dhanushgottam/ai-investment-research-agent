import { InvestmentDecision } from "@/types/graphState";

interface RecommendationCardProps {
  company: string;
  recommendation: InvestmentDecision;
}

export default function RecommendationCard({
  company,
  recommendation,
}: RecommendationCardProps) {
  const badgeColor =
    recommendation.decision === "BUY"
      ? "bg-green-600"
      : recommendation.decision === "SELL"
      ? "bg-red-600"
      : "bg-yellow-500";

  return (
    <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-xl">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            {company}
          </h2>

          <p className="text-slate-400">
            AI Investment Recommendation
          </p>
        </div>

        <div
          className={`${badgeColor} rounded-xl px-4 py-2 text-sm font-bold text-white`}
        >
          {recommendation.decision}
        </div>
      </div>

      {/* Confidence */}
      <div className="mb-6">
        <h3 className="mb-2 font-semibold text-white">
          Confidence
        </h3>

        <div className="h-3 overflow-hidden rounded-full bg-slate-700">
          <div
            className="h-full rounded-full bg-blue-500"
            style={{
              width: `${recommendation.confidence}%`,
            }}
          />
        </div>

        <p className="mt-2 text-slate-300">
          {recommendation.confidence}%
        </p>
      </div>

      {/* Overview */}
      <section className="mb-6">
        <h3 className="mb-2 text-lg font-semibold text-white">
          Overview
        </h3>

        <p className="leading-7 text-slate-300">
          {recommendation.overview}
        </p>
      </section>

      {/* Financial Analysis */}
      <section className="mb-6">
        <h3 className="mb-2 text-lg font-semibold text-white">
          Financial Analysis
        </h3>

        <p className="leading-7 text-slate-300">
          {recommendation.financialAnalysis}
        </p>
      </section>

      {/* Strengths */}
      <section className="mb-6">
        <h3 className="mb-3 text-lg font-semibold text-green-400">
          Strengths
        </h3>

        <ul className="space-y-2">
          {recommendation.strengths.map((item, index) => (
            <li
              key={index}
              className="flex gap-2 text-slate-300"
            >
              <span>✅</span>

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Risks */}
      <section className="mb-6">
        <h3 className="mb-3 text-lg font-semibold text-red-400">
          Risks
        </h3>

        <ul className="space-y-2">
          {recommendation.risks.map((item, index) => (
            <li
              key={index}
              className="flex gap-2 text-slate-300"
            >
              <span>⚠️</span>

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Reasoning */}
      <section>
        <h3 className="mb-2 text-lg font-semibold text-white">
          AI Reasoning
        </h3>

        <p className="leading-7 text-slate-300">
          {recommendation.reasoning}
        </p>
      </section>
    </div>
  );
}