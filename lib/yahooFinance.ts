import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance();

export async function getCompanyFinancialData(symbol: string) {
  try {
  const quote = await yahooFinance.quote(symbol);

    return quote;
  } catch (error) {
    console.error("Yahoo Finance Error:", error);
    throw error;
  }
}