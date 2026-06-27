import { InvestmentState } from "@/types/graphState";
import { askGemini } from "@/services/geminiService";

export async function decisionAgent(
  state: InvestmentState
): Promise<Partial<InvestmentState>> {
  try {
    const prompt = `
You are an expert investment analyst.

Analyze the following company information and provide a professional investment recommendation.

Ticker:
${state.ticker}

Company Information:
${JSON.stringify(state.companyProfile, null, 2)}

Financial Metrics:
${JSON.stringify(state.financialData, null, 2)}

Latest Research:
${JSON.stringify(state.researchData, null, 2)}

Please provide:

1. Company Overview
2. Financial Analysis
3. Positive Factors
4. Risks
5. Overall Recommendation
6. Confidence Score (0-100)

Finally finish with exactly one of:

BUY
HOLD
SELL
`;

    const investmentDecision = await askGemini(prompt);

    return {
      investmentDecision,
      error: null,
    };
  } catch (error) {
    console.error("Decision Agent Error:", error);

    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to generate investment decision.",
    };
  }
}