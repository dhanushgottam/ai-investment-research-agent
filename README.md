# 🤖 AI Investment Research Agent

An AI-powered multi-agent investment research assistant built using **Next.js**, **LangGraph**, **LangChain**, **Google Gemini**, **Yahoo Finance**, and **Tavily Search**.

The application analyzes publicly traded companies using real-time financial information, recent market news, and AI reasoning to generate investment recommendations such as **BUY**, **HOLD**, or **SELL** along with a confidence score and detailed explanation.

---

# Features

* Multi-Agent AI Architecture using LangGraph
* Real-time company financial data from Yahoo Finance
* Latest market news using Tavily Search
* AI-powered investment recommendations using Google Gemini
* Company name to ticker resolution
* General finance chatbot
* Investment analysis with:

  * Recommendation (BUY / HOLD / SELL)
  * Confidence Score
  * Financial Analysis
  * Strengths
  * Risks
  * AI Reasoning
* Modern ChatGPT-inspired interface
* Responsive design

---

# Technology Stack

## Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS

## AI Framework

* LangGraph
* LangChain

## Large Language Model

* Google Gemini 2.5 Flash

## Financial Data

* Yahoo Finance

## Web Search

* Tavily AI Search

---

# Project Structure

```
app/
components/
agents/
graph/
services/
lib/
types/
```

---

# Multi-Agent Workflow

```
User

↓

Intent Router

↓

Investment Graph

↓

Company Agent

↓

Financial Agent

↓

Research Agent

↓

Decision Agent

↓

Investment Recommendation

↓

User Interface
```

---

# Agents

## Company Agent

* Resolves company information
* Retrieves company profile
* Validates ticker symbols

---

## Financial Agent

Fetches:

* Market Cap
* PE Ratio
* EPS
* Revenue
* Debt
* Financial Metrics

---

## Research Agent

Collects:

* Latest News
* Market Sentiment
* Opportunities
* Risks

using Tavily AI Search.

---

## Decision Agent

Uses Google Gemini to analyze:

* Financial Health
* Market Sentiment
* Opportunities
* Risks

Returns structured JSON:

```
BUY
HOLD
SELL
Confidence Score
Financial Analysis
Reasoning
```

---

# Installation

Clone the repository

```
git clone <repository-url>

cd ai-investment-research-agent
```

Install dependencies

```
npm install
```

Create

```
.env.local
```

Add

```
GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY

TAVILY_API_KEY=YOUR_TAVILY_API_KEY
```

Run

```
npm run dev
```

Open

```
http://localhost:3000
```

---

# Example Questions

Investment Analysis

* Should I invest in Apple?
* Analyze Microsoft.
* Is NVIDIA a good long-term investment?
* Should I buy Sun Pharma?

General Finance

* What is stop loss?
* Difference between Buy and Sell.
* What is PE Ratio?
* Explain Market Capitalization.

---

# Deployment

The project is deployed using Vercel.

Required Environment Variables:

```
GOOGLE_API_KEY

TAVILY_API_KEY
```

---

# Future Improvements

* Portfolio Analysis
* Company Comparison
* Stock Price Charts
* Historical Financial Analysis
* User Authentication
* Saved Chat History
* Watchlists
* PDF Investment Reports
* Voice Assistant
* Live Market Dashboard

---

# Disclaimer

This application is designed for educational and research purposes only. It does not constitute financial advice. Users should perform their own due diligence before making investment decisions.

---

# Author

Dhanush Reddy

B.Tech Computer Science and Engineering

Lovely Professional University
