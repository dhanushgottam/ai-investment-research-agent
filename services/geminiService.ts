import { gemini } from "@/lib/gemini";
import { InvestmentDecision } from "@/types/graphState";

export async function askGemini(
  prompt: string
): Promise<InvestmentDecision> {
  try {
    const response = await gemini.invoke(prompt);

    let text = "";

    if (typeof response.content === "string") {
      text = response.content;
    } else {
      text = response.content
        .map((block) =>
          typeof block === "string"
            ? block
            : "text" in block
            ? block.text
            : ""
        )
        .join("\n");
    }

    const decision = JSON.parse(text) as InvestmentDecision;

    return decision;
  } catch (error) {
    console.error("Gemini Service Error:", error);

    throw new Error(
      "Failed to generate structured investment recommendation."
    );
  }
}