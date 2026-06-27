import { InvestmentState } from "@/types/graphState";
import { searchCompanyNews } from "@/services/researchService";

export async function researchAgent(
  state: InvestmentState
): Promise<Partial<InvestmentState>> {
  try {
    const company =
      state.companyProfile?.longName ??
      state.companyProfile?.shortName ??
      state.ticker;

    const researchData = await searchCompanyNews(company);

    return {
      researchData,
      error: null,
    };
  } catch (error) {
    console.error("Research Agent Error:", error);

    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch research data.",
    };
  }
}