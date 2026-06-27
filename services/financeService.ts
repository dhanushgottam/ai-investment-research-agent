import { getCompanyFinancialData } from "@/lib/yahooFinance";

export async function getCompanyQuote(symbol: string) {
  try {
    const quote = await getCompanyFinancialData(symbol);

    return {
      marketCap: quote.marketCap ?? 0,
      peRatio: quote.trailingPE ?? 0,
      eps: quote.epsTrailingTwelveMonths ?? 0,
    };
  } catch (error) {
    console.error("Finance Service Error:", error);
    throw new Error("Failed to fetch financial data.");
  }
}