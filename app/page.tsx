"use client";

import { useEffect, useRef, useState } from "react";

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
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages, loading]);

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
    <div className="chat-root mx-auto">
      <div className="chat-box">
        <div className="messages">
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
          <div ref={bottomRef} />
        </div>

        <div className="input-area">
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}
