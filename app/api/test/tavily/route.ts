import { NextResponse } from "next/server";
import { TavilySearch } from "@langchain/tavily";

const searchTool = new TavilySearch({
  maxResults: 3,
  topic: "finance",
  includeAnswer: true,
});

export async function GET() {
  try {
    const result = await searchTool.invoke({
      query: "Latest news about NVIDIA"
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed",
      },
      {
        status: 500,
      }
    );
  }
}