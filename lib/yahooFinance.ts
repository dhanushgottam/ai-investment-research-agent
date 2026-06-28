import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance();

export async function getCompanyFinancialData(symbol: string) {
  try {
    return await yahooFinance.quote(symbol);
  } catch (error) {
    console.error("Yahoo Finance Error:", error);
    throw error;
  }
}

export async function searchCompanyTicker(query: string): Promise<string | null> {
  try {
    const result = await yahooFinance.search(query);

    if (!result.quotes || result.quotes.length === 0) {
      return null;
    }

    const firstMatch = result.quotes.find(
      (quote) =>
        quote.symbol &&
        quote.quoteType === "EQUITY"
    );

    if (!firstMatch?.symbol) {
      return null;
}
return String(firstMatch.symbol);
  } catch (error) {
    console.error("Yahoo Search Error:", error);
    return null;
  }
}