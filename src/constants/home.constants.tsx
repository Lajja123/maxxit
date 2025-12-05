import React from "react";
import type { HeroStat, WhyChooseStat } from "@/types/home.types";

// Hero Section Constants
export const HERO_STATS: HeroStat[] = [
  { value: "50K+", label: "Active Traders" },
  { value: "2.1M", label: "Signals Delivered" },
  { value: "94%", label: "Accuracy Rate" },
];

export const HERO_CONTENT = {
  badge: "AI-Powered Trading Signals",
  title: {
    main: "Insights that Lead with",
    highlight: "Proven",
    end: "Intelligence",
  },
  subtitle:
    "Say goodbye to guesswork. Our AI analyzes Twitter trends and delivers precise trading signals—helping you stay ahead with real-time crypto insights.",
  buttons: {
    primary: "Launch App",
    secondary: "About Us",
  },
} as const;

// Why Choose Section Constants
export const WHY_CHOOSE_CONTENT = {
  badge: "Why Choose Us",
  title: "Why Choose",
  highlight: "Maxxit",
  description:
    "Maxxit is a fully non-custodial DeFi trading platform that enables users to deploy AI-powered trading agents that execute trades autonomously on your own Safe wallet.",
} as const;

export const WHY_CHOOSE_STATS: WhyChooseStat[] = [
  { value: "24/7", label: "Autonomous Trading" },
  { value: "100%", label: "Non-Custodial" },
  { value: "0", label: "Gas Fees for You" },
  { value: "∞", label: "Control Over Funds" },
];

// Feature Icons as separate components for cleaner code
export const FeatureIcons = {
  aiHuman: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
      />
    </svg>
  ),
  gasless: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  ),
  wallet: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  ),
  impact: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
      />
    </svg>
  ),
};

export const FEATURES = [
  {
    id: "ai-human",
    icon: FeatureIcons.aiHuman,
    title: "AI + Human Reasoning",
    description:
      "Agents combine multi-factor analysis with performance-verified human insights for real alpha generation",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    hoverBg: "group-hover:bg-violet-100",
  },
  {
    id: "gasless",
    icon: FeatureIcons.gasless,
    title: "Gasless Trading",
    description:
      "Maxxit system pays for all gas fees. Trade with just USDC - no need to hold ETH or worry about gas management.",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    hoverBg: "group-hover:bg-amber-100",
  },
  {
    id: "wallet",
    icon: FeatureIcons.wallet,
    title: "Your Wallet, Your Keys",
    description:
      "Trades execute directly from your Safe wallet via secure modules. Revoke access anytime.",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    hoverBg: "group-hover:bg-emerald-100",
  },
  {
    id: "impact",
    icon: FeatureIcons.impact,
    title: "Impact Factor Verified",
    description:
      "Forward-tested signal sources with on-chain verified results. Similar to Kaito's mindshare, but for trading impact.",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    hoverBg: "group-hover:bg-blue-100",
  },
];

// Chart data for Hero dashboard card
export const CHART_DATA = [40, 55, 45, 70, 60, 85, 75, 90, 80, 95];

