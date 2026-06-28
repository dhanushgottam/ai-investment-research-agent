import { Annotation } from "@langchain/langgraph";

/* ============================
   Company Profile
============================ */

export interface CompanyProfile {
  symbol?: string;
  shortName?: string;
  longName?: string;
  exchange?: string;
  currency?: string;

  marketCap?: number;
  trailingPE?: number;
  epsTrailingTwelveMonths?: number;

  [key: string]: unknown;
}

/* ============================
   Financial Data
============================ */

export interface FinancialData {
  marketCap: number;
  peRatio: number;
  eps: number;

  revenue?: number;
  netIncome?: number;
  debtToEquity?: number;
}

/* ============================
   Research Data
============================ */

export interface ResearchData {
  news: string[];

  opportunities: string[];

  risks: string[];

  sentiment: string;
}

/* ============================
   Investment Decision
============================ */

export interface InvestmentDecision {
  decision: "BUY" | "HOLD" | "SELL";

  confidence: number;

  overview: string;

  financialAnalysis: string;

  strengths: string[];

  risks: string[];

  reasoning: string;
}

/* ============================
   Graph State
============================ */

export const GraphState = Annotation.Root({
  ticker: Annotation<string>(),

  companyProfile: Annotation<CompanyProfile>(),

  financialData: Annotation<FinancialData>(),

  researchData: Annotation<ResearchData>(),

  investmentDecision: Annotation<InvestmentDecision>(),

  error: Annotation<string | null>({
    reducer: (_, right) => right,
    default: () => null,
  }),
});

export type InvestmentState = typeof GraphState.State;

export type InvestmentUpdate = typeof GraphState.Update;