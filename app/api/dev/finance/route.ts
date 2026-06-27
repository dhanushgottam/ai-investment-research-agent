import { NextResponse } from "next/server";
import { getCompanyFinancialData } from "@/lib/yahooFinance";

export async function GET() {
  try {
    const quote = await getCompanyFinancialData("AAPL");

    return NextResponse.json({
      success: true,
      data: quote,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}