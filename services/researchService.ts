import { TavilySearch } from "@langchain/tavily";
import { ResearchData } from "@/types/graphState";

const tavily = new TavilySearch({
  maxResults: 5,
  topic: "finance",
  searchDepth: "advanced",
  includeAnswer: true,
  includeRawContent: "markdown",
});

export async function searchCompanyNews(
  company: string
): Promise<ResearchData> {
  try {
    const response = await tavily.invoke({
      query: `Latest financial news, risks, opportunities and market sentiment about ${company}`,
    });

    const results = Array.isArray(response.results)
      ? response.results
      : [];

    return {
      news: results.map((item: any) => item.title ?? item.url),

      opportunities: [
        response.answer ??
          "No major opportunities identified.",
      ],

      risks: [
        "Market volatility",
        "Macroeconomic uncertainty",
        "Competition",
      ],

      sentiment: response.answer
        ? "Bullish"
        : "Neutral",
    };
  } catch (error) {
    console.error("Research Service Error:", error);

    throw new Error("Failed to fetch research data.");
  }
}