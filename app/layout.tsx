import type { Metadata } from "next";

import "./globals.css";





export const metadata: Metadata = {
  title: "AI Investment Research Agent",
  description:
    "AI-powered investment research using LangGraph, Gemini, Yahoo Finance and Tavily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main
          style={{
            width: "100%",
            maxWidth: "900px",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            padding: "24px",
            margin: "0 auto",
          }}
        >
          <header className="site-header" style={{ marginBottom: 12 }}>
            <div>
              <h1 className="text-2xl font-bold">AI Investment Assistant</h1>
              <p className="text-sm text-slate-400">Analyze companies or ask finance questions.</p>
            </div>
          </header>

          {children}
        </main>
      </body>
    </html>
  );
}

