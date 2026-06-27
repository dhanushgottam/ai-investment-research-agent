import { NextRequest, NextResponse } from "next/server";

import { investmentGraph } from "@/graph/investmentGraph";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { ticker } = body;

    if (!ticker) {
      return NextResponse.json(
        {
          success: false,
          error: "Ticker is required.",
        },
        {
          status: 400,
        }
      );
    }

    const result = await investmentGraph.invoke({
      ticker: ticker.toUpperCase(),
    });

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Research API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}