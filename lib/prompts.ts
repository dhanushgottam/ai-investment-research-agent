import { FinancialData, ResearchData } from "@/types/graphState";

export function buildInvestmentPrompt(
  companyName: string,
  financialData: FinancialData,
  researchData: ResearchData
): string {
  return `
You are a professional investment analyst.

Your task is to analyze the company and decide whether it is a good investment.

Company:
${companyName}

Financial Data
--------------
Market Cap: ${financialData.marketCap}
Revenue: ${financialData.revenue}
Net Income: ${financialData.netIncome}
PE Ratio: ${financialData.peRatio}
EPS: ${financialData.eps}
Debt To Equity: ${financialData.debtToEquity}

Latest News
-----------
${researchData.news.join("\n")}

Opportunities
-------------
${researchData.opportunities.join("\n")}

Risks
-----
${researchData.risks.join("\n")}

Market Sentiment
----------------
${researchData.sentiment}

Return your response in exactly the following format:

Decision: INVEST or PASS

Confidence: (0-100)

Reasoning:
(Explain your reasoning in detail.)
`;
}