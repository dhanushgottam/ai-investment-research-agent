// ============================================================================
// Company Information
// ============================================================================

export interface CompanyProfile {
  name: string;
  ticker: string;
  sector: string;
  industry: string;
  description: string;
}

// ============================================================================
// Financial Information
// ============================================================================

export interface FinancialData {
  marketCap: number;
  revenue: number;
  netIncome: number;
  peRatio: number;
  eps: number;
  debtToEquity: number;
}

// ============================================================================
// Web Research
// ============================================================================

export interface ResearchData {
  news: string[];
  opportunities: string[];
  risks: string[];
  sentiment: string;
}

// ============================================================================
// Final Recommendation
// ============================================================================

export interface Recommendation {
  decision: "INVEST" | "PASS";
  confidence: number;
  reasoning: string;
}

// ============================================================================
// LangGraph Shared State
// ============================================================================

export interface GraphState {
  companyName: string;

  companyProfile?: CompanyProfile;

  financialData?: FinancialData;

  researchData?: ResearchData;

  recommendation?: Recommendation;
}