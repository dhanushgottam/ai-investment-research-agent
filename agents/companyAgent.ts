import { InvestmentState } from "@/types/graphState";
import { getCompanyFinancialData } from "@/lib/yahooFinance";

export async function companyAgent(
  state: InvestmentState
): Promise<Partial<InvestmentState>> {
  try {
    const companyProfile = await getCompanyFinancialData(state.ticker);

    return {
      companyProfile,
      error: null,
    };
  } catch (error) {
    console.error("Company Agent Error:", error);

    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch company profile.",
    };
  }
}