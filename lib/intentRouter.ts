import { askGeminiJSON } from "@/services/geminiService";
import { IntentResult } from "@/types/graphState";

export async function detectIntent(
  message: string
): Promise<IntentResult> {
  const prompt = `
You are an AI Intent Router for an Investment Assistant.

Your job is ONLY to classify the user's request.

Return ONLY valid JSON.

Never explain.

Never answer the user's question.

--------------------------------------------------
INTENTS
--------------------------------------------------

1. investment_analysis

Choose this if the user:

- asks whether they should invest
- asks BUY / SELL / HOLD
- asks for company analysis
- asks about a company's financial status
- asks about company fundamentals
- asks for valuation
- asks for investment recommendation
- asks about future growth
- asks about risks
- asks about opportunities
- mentions a company and wants an opinion
- mentions a company and asks any financial question

Examples:

Should I invest in Apple?

Analyze Tesla.

What is Microsoft's financial status?

Give me Nvidia analysis.

Is Reliance a good investment?

Tell me about Infosys stock.

Should I buy Sun Pharma?

--------------------------------------------

2. education

Choose this if the user wants to learn investing concepts.

Examples:

What is PE Ratio?

Explain Market Cap.

Difference between BUY and SELL.

What is EPS?

--------------------------------------------

3. comparison

Choose this ONLY if the user compares companies.

Examples:

Apple vs Microsoft

Compare Tesla and Nvidia

--------------------------------------------

4. general_chat

Everything else.

Greetings.

Casual conversation.

Market news.

Weather.

Etc.

--------------------------------------------------
OUTPUT FORMAT
--------------------------------------------------

Investment

{
"intent":"investment_analysis",
"company":"Apple"
}

Education

{
"intent":"education"
}

Comparison

{
"intent":"comparison",
"companies":["Apple","Microsoft"]
}

General

{
"intent":"general_chat"
}

--------------------------------------------------

User:

${message}
`;

  try {
    return await askGeminiJSON<IntentResult>(prompt);
  } catch {
    return {
      intent: "general_chat",
    };
  }
}