"use client";

import React, { useState } from "react";
import Typography from "@/theme/Typography";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FEATURES = [
  {
    id: "ai-human",
    title: "AI + Human Reasoning",
    description:
      "Agents combine multi-factor analysis with performance-verified human insights for real alpha generation",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    id: "gasless",
    title: "Gasless Trading",
    description:
      "Maxxit system pays for all gas fees. Trade with just USDC - no need to hold ETH or worry about gas management.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    id: "wallet",
    title: "Your Wallet, Your Keys",
    description:
      "Trades execute directly from your Safe wallet via secure modules. Revoke access anytime.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    id: "impact",
    title: "Impact Factor Verified",
    description:
      "Forward-tested signal sources with on-chain verified results. Similar to Kaito's mindshare, but for trading impact.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
];

const FeatureCard = ({
  feature,
  isExpanded,
  onHover,
  onLeave,
  index,
}: {
  feature: (typeof FEATURES)[0];
  isExpanded: boolean;
  onHover: () => void;
  onLeave: () => void;
  index: number;
}) => {
  // Different gradient backgrounds for each card - darker shades
  const gradients = [
    "from-zinc-800/95 via-zinc-900/98 to-black",
    "from-neutral-700/90 via-neutral-800/95 to-zinc-900",
    "from-stone-700/85 via-stone-800/92 to-neutral-900",
    "from-zinc-700/80 via-zinc-800/90 to-stone-900",
  ];

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-out
        ${isExpanded ? "flex-[3]" : "flex-[0.65]"}
        bg-gradient-to-b ${gradients[index]}
        border border-white/10 hover:border-white/20
        group
      `}
      style={{
        minHeight: "380px",
      }}
    >
      {/* Subtle glow effect on hover */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isExpanded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(251,146,60,0.08) 0%, transparent 50%)",
        }}
      />

      {/* Card Content */}
      <div className="relative h-full flex flex-col justify-between p-5">
        {/* Title - Vertical when collapsed, Horizontal when expanded */}
        <div className="flex-1 relative">
          {/* Vertical Title (shown when collapsed) */}
          <div
            className={`absolute top-0 left-0 transition-all duration-500 ${
              isExpanded ? "opacity-0 -translate-x-4" : "opacity-100 translate-x-0"
            }`}
          >
            <h3
              className="font-mori text-sm font-medium text-white/90 whitespace-nowrap tracking-wide"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
              }}
            >
              {feature.title}
            </h3>
          </div>

          {/* Expanded Content */}
          <div
            className={`transition-all duration-500 ${
              isExpanded
                ? "opacity-100 translate-y-0 delay-150"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <h3 className="font-mori text-lg font-semibold text-white mb-6">
              {feature.title}
            </h3>

            <p className="font-bohemian text-sm text-white/70 leading-relaxed max-w-[260px]">
              {feature.description}
            </p>
          </div>
        </div>

        {/* CTA Button (only visible when expanded) */}
        <div
          className={`transition-all duration-500 ${
            isExpanded
              ? "opacity-100 translate-y-0 delay-200"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors group/btn">
            <span className="w-5 h-5 rounded-full border border-orange-400/50 bg-orange-500/10 flex items-center justify-center group-hover/btn:border-orange-400 group-hover/btn:bg-orange-500/20 transition-all">
              <svg
                className="w-3 h-3 text-orange-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span className="font-bohemian text-sm">Learn more</span>
          </button>
        </div>

        {/* Icon (shown when collapsed) */}
        <div
          className={`absolute bottom-5 left-1/2 -translate-x-1/2 transition-all duration-500 ${
            isExpanded ? "opacity-0 scale-75" : "opacity-100 scale-100"
          }`}
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50">
            {feature.icon}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </div>
  );
};

export default function WhyChoose() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({
    threshold: 0.2,
  });
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background is transparent to show DotGrid animation */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Layout - Two columns on desktop */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Side - Title & Description */}
          <div
            ref={headerRef}
            className="lg:col-span-4 mb-12 lg:mb-0 lg:sticky lg:top-32"
          >
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 mb-6 ${
                headerInView ? "animate-blur-reveal" : "opacity-0"
              }`}
              style={{ animationFillMode: "forwards" }}
            >
              <span className="font-bohemian text-xs uppercase tracking-widest text-black/60">
                Why Choose Us
              </span>
            </div>

            {/* Title */}
            <div
              className={`mb-6 ${headerInView ? "animate-blur-reveal" : "opacity-0"}`}
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <Typography variant="h2" weight="bold">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                  Maxxit
                </span>
              </Typography>
            </div>

            {/* Description */}
            <p
              className={`font-bohemian text-base lg:text-lg text-black/60 leading-relaxed ${
                headerInView ? "animate-blur-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" } as React.CSSProperties}
            >
              Maxxit is a fully non-custodial DeFi trading platform that enables users to deploy AI-powered trading agents that execute trades autonomously on your own Safe wallet. Agents process multi-parameter market signals and execute trades 24/7 while you maintain complete control over your funds.
            </p>

            {/* Stats or additional info */}
            <div
              className={`mt-8 flex flex-wrap gap-6 ${
                headerInView ? "animate-blur-reveal" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" } as React.CSSProperties}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
                <span className="font-bohemian text-sm text-black/50">24/7 Trading</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
                <span className="font-bohemian text-sm text-black/50">Non-Custodial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
                <span className="font-bohemian text-sm text-black/50">AI-Powered</span>
              </div>
            </div>
          </div>

          {/* Right Side - Expandable Cards */}
          <div className="lg:col-span-8">
            <div
              ref={cardsRef}
              className={`flex gap-3 transition-all duration-700 ${
                cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              {FEATURES.map((feature, index) => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  isExpanded={expandedIndex === index}
                  onHover={() => setExpandedIndex(index)}
                  onLeave={() => {}}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
