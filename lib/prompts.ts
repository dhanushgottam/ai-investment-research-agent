import { FinancialData, ResearchData } from "@/types/graphState";

export function buildInvestmentPrompt(
  companyName: string,
  financialData: FinancialData,
  researchData: ResearchData
): string {
  return `
You are a senior Wall Street investment analyst.

Analyze the following company using the provided financial data and latest market research.

==============================
COMPANY
==============================
${companyName}

==============================
FINANCIAL DATA
==============================

Market Cap:
${financialData.marketCap}

PE Ratio:
${financialData.peRatio}

EPS:
${financialData.eps}

Revenue:
${financialData.revenue ?? "Not Available"}

Net Income:
${financialData.netIncome ?? "Not Available"}

Debt To Equity:
${financialData.debtToEquity ?? "Not Available"}

==============================
LATEST NEWS
==============================

${researchData.news.join("\n")}

==============================
OPPORTUNITIES
==============================

${researchData.opportunities.join("\n")}

==============================
RISKS
==============================

${researchData.risks.join("\n")}

==============================
MARKET SENTIMENT
==============================

${researchData.sentiment}

========================================================
IMPORTANT
========================================================

Return ONLY valid JSON.

Do NOT use markdown.

Do NOT use code blocks.

Return exactly this schema:

{
  "decision":"BUY | HOLD | SELL",
  "confidence":90,
  "overview":"...",
  "financialAnalysis":"...",
  "strengths":[
      "...",
      "..."
  ],
  "risks":[
      "...",
      "..."
  ],
  "reasoning":"..."
}

The response MUST be valid JSON.
`;
}