import {
  InvestmentDecision,
  InvestmentState,
} from "@/types/graphState";

import { askGeminiJSON } from "@/services/geminiService";

import { buildInvestmentPrompt } from "@/lib/prompts";

export async function decisionAgent(
  state: InvestmentState
): Promise<Partial<InvestmentState>> {
  try {
    console.log("🤖 Decision Agent");

    const companyName =
      state.companyProfile?.longName ??
      state.companyProfile?.shortName ??
      state.ticker;

    const prompt = buildInvestmentPrompt(
      companyName,
      state.financialData,
      state.researchData
    );

    const investmentDecision =
      await askGeminiJSON<InvestmentDecision>(
        prompt
      );

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
          : "Decision Agent Failed",
    };
  }
}