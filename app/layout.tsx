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
          {children}
        </main>
      </body>
    </html>
  );
}

