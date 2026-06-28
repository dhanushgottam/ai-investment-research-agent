import { gemini } from "@/lib/gemini";

/* ==========================================
   Plain Text Response
========================================== */

export async function askGemini(prompt: string): Promise<string> {
  try {
    const response = await gemini.invoke(prompt);


    if (typeof response.content === "string") {
      return response.content;
    }

    return response.content
      .map((item: any) =>
        typeof item === "string"
          ? item
          : item.text ?? ""
      )
      .join("");
  } catch (error) {
    console.error("Gemini Error:", error);

    throw new Error("Failed to generate response.");
  }
}

/* ==========================================
   JSON Response
========================================== */

export async function askGeminiJSON<T>(
  prompt: string
): Promise<T> {
  const text = await askGemini(prompt);

  console.log("========== GEMINI RAW ==========");
  console.log(text);
  console.log("================================");

  try {
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    console.log("========== CLEANED ==========");
    console.log(cleaned);
    console.log("=============================");

    return JSON.parse(cleaned) as T;
  } catch (error) {
    console.error("Gemini JSON Parse Error:", error);

    throw new Error("Gemini returned invalid JSON.");
  }
}