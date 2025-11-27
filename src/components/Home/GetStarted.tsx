"use client";

import Image from "next/image";
import React, { useState } from "react";

import Typography from "../UI/Typography";
import heroClip from "@/assests/home/hero-clip.png";

const steps = [
  {
    id: "download",
    title: "Endless Exploration",
    description:
      "Analyze Crypto Twitter with unmatched speed. Our AI extracts predictions, trends, and insights in real time, keeping you ahead of every market move.",
    icon: "⬇️",
    accent: "#C7FF52",
  },
  {
    id: "wallet",
    title: "AI driven clutter Insights",
    description:
      "Eliminate data overload with actionable precision. Our platform turns scattered crypto trends into clear insights—far beyond just another search engine.",
    icon: "👛",
    accent: "#8A5BFF",
  },
  {
    id: "trade",
    title: "AI powered trading signals",
    description:
      "Simplify trading with AI-driven insights. We scan Twitter for relevant discussions, analyze trends using AI, and generate high-quality signals to optimize your trading strategy.  ",
    icon: "⚡",
    accent: "#54D6FF",
  },
  {
    id: "social",
    title: "Actionable Dashboard",
    description:
      "Simplify trading with AI-analyzed signals. Track performance, monitor market impact, and gain real-time insights with the Impact Leaderboard and Heartbeat Dashboards.",
    icon: "⚡",
    accent: "#54D6FF",
  },
];

function GetStarted() {
  const [activeStepId, setActiveStepId] = useState(steps[0].id);

  return (
    <div className="relative px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
      <div className="pointer-events-none absolute opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
      </div>
      <div className="relative z-10 mb-12 flex flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#050714]/15 bg-white/70 px-6 py-2 text-[10px] uppercase tracking-[0.4em] text-[#050714]/60">
          <span className="h-1.5 w-1.5 rounded-full bg-[#050714]" />
          Runbook
        </span>
        <Typography variant="h2" color="#050714" weight="bold">
          Get Started
        </Typography>
        <p className="max-w-3xl text-sm text-[#050714]/65 md:text-base">
          From download to your first automated trade, follow the capsule flow
          that mirrors our onboarding concierge.
        </p>
      </div>
      <div className="relative flex flex-col gap-0 lg:flex-row">
        <div className="relative flex flex-1  rounded-[36px] border border-white/10 bg-[#020202] p-8">
          <div className="absolute bg-[radial-gradient(circle_at_top,rgba(199,255,82,0.12),transparent_55%)]" />
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-8">
            <div className="relative h-[420px] w-full max-w-[420px]">
              <Image
                src={heroClip}
                alt="Maxxit hero visualization"
                fill
                className="rounded-[28px] object-cover object-center"
                priority
              />
              <button className="absolute inset-0 m-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#C7FF52] text-black shadow-[0_20px_80px_rgba(199,255,82,0.35)]">
                <span className="text-3xl">▶</span>
              </button>
            </div>
          </div>
          <div className=" flex-col rounded-[32px] border border-white/10 bg-black/80 text-white">
            {steps.map((step, index) => {
              const isActive = step.id === activeStepId;
              const isLast = index === steps.length - 1;
              return (
                <div
                  key={step.id}
                  className="border-b border-white/5 last:border-b-0"
                >
                  <button
                    onClick={() => setActiveStepId(step.id)}
                    className="flex w-full items-center gap-6 px-8 py-6 text-left hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C7FF52]/60"
                  >
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-full text-2xl"
                      style={{ backgroundColor: `${step.accent}26` }}
                    >
                      {step.icon}
                    </span>
                    <div className="flex flex-1 flex-col">
                      <p className="text-lg font-semibold">{step.title}</p>
                      {isActive && (
                        <p className="mt-2 text-sm text-white/60">
                          {step.description}
                        </p>
                      )}
                    </div>
                    <span className="text-2xl font-light text-[#C7FF52]">
                      {isActive ? "—" : "+"}
                    </span>
                  </button>
                  {!isLast && (
                    <div className="flex justify-end px-8">
                      <span className="h-px w-20 bg-linear-to-r from-transparent via-white/20 to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
