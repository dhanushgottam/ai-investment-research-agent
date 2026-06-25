import { gemini } from "@/lib/gemini";

export async function askGemini(prompt: string) {
  try {
    const response = await gemini.invoke(prompt);

    return response.content;
  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw new Error("Failed to generate AI response.");
  }
}