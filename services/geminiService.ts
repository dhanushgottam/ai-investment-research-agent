import { gemini } from "@/lib/gemini";

export async function askGemini(prompt: string): Promise<string> {
  try {
    const response = await gemini.invoke(prompt);

    if (typeof response.content === "string") {
      return response.content;
    }

    return response.content
      .map((block) =>
        typeof block === "string"
          ? block
          : "text" in block
          ? block.text
          : ""
      )
      .join("\n");
  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw new Error("Failed to generate AI response.");
  }
}