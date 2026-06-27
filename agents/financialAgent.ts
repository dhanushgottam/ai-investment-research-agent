import { InvestmentState } from "@/types/graphState";
import { getCompanyQuote } from "@/services/financeService";

export async function financialAgent(
  state: InvestmentState
): Promise<Partial<InvestmentState>> {
  try {
    const financialData = await getCompanyQuote(state.ticker);

    return {
      financialData,
      error: null,
    };
  } catch (error) {
    console.error("Financial Agent Error:", error);

    return {
      error:
        error instanceof Error
          ? error.message
          : "Failed to fetch financial data.",
    };
  }
}