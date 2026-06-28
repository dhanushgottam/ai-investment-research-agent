import { NextRequest, NextResponse } from "next/server";

import { investmentGraph } from "@/graph/investmentGraph";

import { detectIntent } from "@/lib/intentRouter";
import { resolveTicker } from "@/lib/companyResolver";

import { askGemini } from "@/services/geminiService";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const message = body?.ticker?.trim();

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a message.",
        },
        { status: 400 }
      );
    }

    console.log("User:", message);

    const intent = await detectIntent(message);

    console.log("Detected Intent:", JSON.stringify(intent, null, 2));

    /* ============================
       General Chat
    ============================ */

    if (
      intent.intent === "general_chat" ||
      intent.intent === "education"
    ) {
      const response = await askGemini(message);

      return NextResponse.json({
        success: true,
        type: "chat",
        response,
      });
    }

    /* ============================
       Company Comparison
    ============================ */

    if (intent.intent === "comparison") {
      return NextResponse.json({
        success: true,
        type: "chat",
        response:
          "🚧 Company comparison is coming in Phase 5.",
      });
    }

    /* ============================
       Investment Analysis
    ============================ */

    const ticker = await resolveTicker(
      intent.company ?? message
    );

    if (!ticker) {
      return NextResponse.json({
        success: true,
        type: "chat",
        response:
          "I couldn't identify that company. Please try another company name.",
      });
    }

    console.log("Ticker:", ticker);

    const result = await investmentGraph.invoke({
      ticker,
    });

    console.log("FINAL RESULT");
    console.dir(result, { depth: null });
    return NextResponse.json({
      success: true,
      type: "analysis",
      analysis: {
        ticker: result.ticker,
        company: result.companyProfile,
        financials: result.financialData,
        research: result.researchData,
        recommendation: result.investmentDecision,
      },
    });
  } catch (error) {
    console.error(error);

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