import { searchCompanyTicker } from "@/lib/yahooFinance";

function cleanQuery(query: string): string {
  return query
    .toLowerCase()
    .replace(/should i invest in/gi, "")
    .replace(/can i invest in/gi, "")
    .replace(/is it good to invest in/gi, "")
    .replace(/analyze/gi, "")
    .replace(/analyse/gi, "")
    .replace(/tell me about/gi, "")
    .replace(/give me/gi, "")
    .replace(/stock of/gi, "")
    .replace(/share of/gi, "")
    .replace(/company/gi, "")
    .replace(/\?/g, "")
    .replace(/\./g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// ⬇️ Replace ONLY this function
export async function resolveTicker(
  query: string
): Promise<string | null> {

  const cleaned = cleanQuery(query);

  console.log("Original Query:", query);
  console.log("Cleaned Query:", cleaned);

  const trimmed = query.trim();

  // Only accept direct tickers if user typed them in uppercase
  if (
    trimmed === trimmed.toUpperCase() &&
    /^[A-Z.]{1,5}$/.test(trimmed)
  ) {
    console.log("User entered ticker:", trimmed);
    return trimmed;
  }

  console.log("Searching Yahoo for:", cleaned);

  const ticker = await searchCompanyTicker(cleaned);

  console.log("Yahoo returned:", ticker);

  return ticker;
}