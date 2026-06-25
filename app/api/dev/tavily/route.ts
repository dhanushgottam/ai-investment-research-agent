import { NextResponse } from "next/server";
import { TavilySearch } from "@langchain/tavily";

const tavily = new TavilySearch({
  maxResults: 3,
  topic: "finance",
  searchDepth: "advanced",
  includeAnswer: true,
  includeRawContent: "markdown",
});

export async function GET() {
  try {
    const result = await tavily.invoke({
      query: "Latest news about NVIDIA",
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}