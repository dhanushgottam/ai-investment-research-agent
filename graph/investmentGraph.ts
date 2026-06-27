import {
  StateGraph,
  START,
  END,
} from "@langchain/langgraph";

import { GraphState } from "@/types/graphState";

import { companyAgent } from "@/agents/companyAgent";
import { financialAgent } from "@/agents/financialAgent";
import { researchAgent } from "@/agents/researchAgent";
import { decisionAgent } from "@/agents/decisionAgent";

export const investmentGraph = new StateGraph(GraphState)
  .addNode("companyAgent", companyAgent)
  .addNode("financialAgent", financialAgent)
  .addNode("researchAgent", researchAgent)
  .addNode("decisionAgent", decisionAgent)

  .addEdge(START, "companyAgent")
  .addEdge("companyAgent", "financialAgent")
  .addEdge("financialAgent", "researchAgent")
  .addEdge("researchAgent", "decisionAgent")
  .addEdge("decisionAgent", END)

  .compile();