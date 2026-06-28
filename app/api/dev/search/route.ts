import { NextResponse } from "next/server";
import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance();

export async function GET() {
  try {
    const result = await yahooFinance.search("Sun Pharma");

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
}