import { InvestmentState } from "@/types/graphState";
import { askGemini } from "@/services/geminiService";
import { buildInvestmentPrompt } from "@/lib/prompts";

export async function decisionAgent(
  state: InvestmentState
): Promise<Partial<InvestmentState>> {
  try {
    console.log(`🤖 Decision Agent: Generating recommendation...`);

    const companyName =
      state.companyProfile?.longName ??
      state.companyProfile?.shortName ??
      state.ticker;

    const prompt = buildInvestmentPrompt(
      companyName,
      state.financialData,
      state.researchData
    );

    const investmentDecision = await askGemini(prompt);

    console.log("✅ Decision Agent: Recommendation generated.");

    return {
      investmentDecision,
      error: null,
    };
  } catch (error) {
    console.error("❌ Decision Agent Error:", error);

    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to generate investment recommendation.",
    };
  }
}