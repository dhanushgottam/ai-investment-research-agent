import { NextRequest, NextResponse } from "next/server";

import { investmentGraph } from "@/graph/investmentGraph";

const TICKER_REGEX = /^[A-Za-z]{1,10}$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const ticker = body?.ticker?.trim().toUpperCase();

    if (!ticker) {
      return NextResponse.json(
        {
          success: false,
          message: "Ticker symbol is required.",
        },
        { status: 400 }
      );
    }

    if (!TICKER_REGEX.test(ticker)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid ticker symbol.",
        },
        { status: 400 }
      );
    }

    console.log(`🚀 Starting analysis for ${ticker}`);

    const result = await investmentGraph.invoke({
      ticker,
    });

    console.log(`✅ Analysis completed for ${ticker}`);

    return NextResponse.json({
      success: true,
      analysis: {
        ticker: result.ticker,
        company: result.companyProfile,
        financials: result.financialData,
        research: result.researchData,
        recommendation: result.investmentDecision,
      },
    });
  } catch (error) {
    console.error("❌ Research API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
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