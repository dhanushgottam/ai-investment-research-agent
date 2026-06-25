import { NextResponse } from "next/server";
import { gemini } from "@/lib/gemini";

export async function GET() {
  try {
    const response = await gemini.invoke(
      "Respond with exactly this sentence: Gemini connection successful."
    );

    return NextResponse.json({
      success: true,
      response: response.content,
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