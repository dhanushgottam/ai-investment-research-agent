import yahooFinance from "yahoo-finance2";

export async function getCompanyQuote(symbol: string) {
  try {
    const quote = await yahooFinance.quote(symbol);

    return quote;
  } catch (error) {
    console.error("Finance Service Error:", error);
    throw new Error("Failed to fetch financial data.");
  }
}