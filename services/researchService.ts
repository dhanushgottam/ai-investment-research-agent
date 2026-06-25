import { TavilySearch } from "@langchain/tavily";

const tavily = new TavilySearch({
  maxResults: 5,
  topic: "finance",
  searchDepth: "advanced",
  includeAnswer: true,
  includeRawContent: "markdown",
});

export async function searchCompanyNews(company: string) {
  try {
    return await tavily.invoke({
      query: `Latest financial news, risks, opportunities and market sentiment about ${company}`,
    });
  } catch (error) {
    console.error("Research Service Error:", error);
    throw new Error("Failed to fetch research data.");
  }
}