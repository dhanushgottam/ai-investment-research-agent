import { TavilySearch } from "@langchain/tavily";
export const tavilySearch = new TavilySearch({
  maxResults: 5,
  topic: "finance",
  searchDepth: "advanced",
  includeAnswer: true,
  includeRawContent: true,
});