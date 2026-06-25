import yahooFinance from "yahoo-finance2";

export async function getCompanyFinancialData(symbol: string) {
  try {
    const quote = await yahooFinance.quote(symbol);

    console.log(quote);

    return quote;
  } catch (error) {
    console.error(error);
    throw error;
  }
}