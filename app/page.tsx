"use client";

import { useState } from "react";

import ChatInput from "@/components/ChatInput";
import ChatMessage from "@/components/ChatMessage";
import ThinkingMessage from "@/components/ThinkingMessage";
import RecommendationCard from "@/components/RecommendationCard";

import { InvestmentDecision } from "@/types/graphState";

interface AnalysisResponse {
  company: {
    longName?: string;
    shortName?: string;
  };

  recommendation: InvestmentDecision;
}

type ChatItem =
  | {
      role: "user" | "assistant";
      type: "chat";
      message: string;
    }
  | {
      role: "assistant";
      type: "analysis";
      analysis: AnalysisResponse;
    };

export default function Home() {
  const [messages, setMessages] = useState<ChatItem[]>([]);

  const [loading, setLoading] = useState(false);

  async function handleSend(message: string) {
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        type: "chat",
        message,
      },
    ]);

    setLoading(true);

    try {
      const response = await fetch("/api/research", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          ticker: message,
        }),
      });

      const data = await response.json();

      console.log("========== API RESPONSE ==========");
      console.log(data);
      console.log("==================================");

      setLoading(false);

      if (!data.success) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            type: "chat",
            message:
              data.message ??
              "Something went wrong.",
          },
        ]);

        return;
      }

      if (data.type === "chat") {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            type: "chat",
            message: data.response,
          },
        ]);

        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          type: "analysis",
          analysis: data.analysis,
        },
      ]);
    } catch {
      setLoading(false);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          type: "chat",
          message:
            "Unable to contact the server.",
        },
      ]);
    }
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col">
      <div className="py-10 text-center">
        <h1 className="text-5xl font-bold text-white">
          AI Investment Assistant
        </h1>

        <p className="mt-4 text-slate-400">
          Analyze companies or ask finance questions.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-6">
        {messages.map((msg, index) => {
          if (msg.type === "analysis") {
            return (
              <RecommendationCard
                key={index}
                company={
                  msg.analysis.company?.longName ??
                  msg.analysis.company?.shortName ??
                  "Company"
                }
                recommendation={
                  msg.analysis.recommendation
                }
              />
            );
          }

          return (
            <ChatMessage
              key={index}
              role={msg.role}
              message={msg.message}
            />
          );
        })}

        {loading && <ThinkingMessage />}
      </div>

      <div className="sticky bottom-0 mt-8 bg-slate-950 py-6">
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
