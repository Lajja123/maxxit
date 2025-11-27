"use client";

import React, { useMemo, useState } from "react";

import { Typography } from "../UI/Typography";

type DescriptionChunk = {
  type: "text" | "highlight";
  text: string;
};

type ApproachCard = {
  id: string;
  marquee: [string, string];
  title: string;
  secondary?: string;
  status?: string;
  description: DescriptionChunk[];
  ctaLabel: string;
  ctaHref?: string;
  icon: "providers" | "telegram" | "performance";
  iconAccent: string;
};

const approachCards: ApproachCard[] = [
  {
    id: "providers",
    marquee: ["PRO SIGNALS", "PRO SIGNALS"],
    title: "Subscribe to Proven Signal Providers",
    icon: "providers",
    iconAccent: "#8F7BFF",
    description: [
      {
        type: "text",
        text: "Follow top-performing X accounts whose strategies are converted into real, actionable signals — not just opinions or sentiment. Each account is ranked by backtested performance and on-chain proof.",
      },
    ],
    ctaLabel: "Follow Providers",
  },
  {
    id: "telegram",
    marquee: ["TELEGRAM", "ALERTS"],
    title: "Get Clean, Actionable Signals on Telegram",
    icon: "telegram",
    iconAccent: "#55D3C2",
    description: [
      { type: "text", text: "Receive structured, market-tested " },
      { type: "highlight", text: "signals on Telegram" },
      {
        type: "text",
        text: " with zero clutter—just clean insight from traders you trust.",
      },
    ],
    ctaLabel: "Connect Telegram",
  },
  {
    id: "performance",
    marquee: ["PERFORMANCE", "TRUST"],
    title: "Built for Trust, Driven by Performance",
    icon: "performance",
    iconAccent: "#F5C26B",
    secondary: "Proof-backed",
    status: "On-chain proof",
    description: [
      { type: "highlight", text: "Built for trust" },
      {
        type: "text",
        text: " and driven by performance so creators earn based on verified outcomes while every signal remains immutable on-chain.",
      },
    ],
    ctaLabel: "View Performance",
  },
];

const Description: React.FC<{ chunks: DescriptionChunk[] }> = ({ chunks }) => (
  <p className="text-sm leading-relaxed text-[#050714] md:text-base">
    {chunks.map((chunk, index) =>
      chunk.type === "highlight" ? (
        <span
          key={`${chunk.text}-${index}`}
          className="bg-[#050714]/10 px-1 font-semibold text-[#050714]"
        >
          {chunk.text}
        </span>
      ) : (
        <span key={`${chunk.text}-${index}`}>{chunk.text}</span>
      )
    )}
  </p>
);

const ProvidersIcon = ({ accent }: { accent: string }) => (
  <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
    <rect
      x="2"
      y="12"
      width="60"
      height="40"
      rx="12"
      fill={`${accent}1A`}
      stroke={accent}
      strokeWidth="2"
    />
    <path
      d="M18 24L28 32L18 40"
      stroke={accent}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M32 24H46"
      stroke={accent}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M32 32H46"
      stroke={accent}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M32 40H46"
      stroke={accent}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const TelegramIcon = ({ accent }: { accent: string }) => (
  <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
    <circle
      cx="32"
      cy="32"
      r="28"
      fill={`${accent}1A`}
      stroke={accent}
      strokeWidth="2"
    />
    <path
      d="M18 32L46 18L40 46L30 36L24 42L22 30L18 32Z"
      fill="white"
      stroke={accent}
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const PerformanceIcon = ({ accent }: { accent: string }) => (
  <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
    <rect
      x="10"
      y="22"
      width="44"
      height="32"
      rx="10"
      fill={`${accent}1A`}
      stroke={accent}
      strokeWidth="2"
    />
    <path
      d="M24 30V22C24 16.48 28.48 12 34 12C39.52 12 44 16.48 44 22V30"
      stroke={accent}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle
      cx="34"
      cy="40"
      r="6"
      stroke={accent}
      strokeWidth="2.5"
      fill="white"
    />
    <path
      d="M34 36V41L37 43"
      stroke={accent}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CardIcon = ({
  variant,
  accent,
}: {
  variant: ApproachCard["icon"];
  accent: string;
}) => {
  const baseClass =
    "inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-[#050714]/10 ";
  return (
    <span
      className={baseClass}
      style={{ boxShadow: `0 15px 55px ${accent}33` }}
    >
      {variant === "providers" && <ProvidersIcon accent={accent} />}
      {variant === "telegram" && <TelegramIcon accent={accent} />}
      {variant === "performance" && <PerformanceIcon accent={accent} />}
    </span>
  );
};

function Usecase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCard = useMemo(() => approachCards[activeIndex], [activeIndex]);

  return (
    <>
      <section className="relative overflow-hidden bg-white px-4 py-20 text-[#050714] sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(5,7,20,0.04) 1px, transparent 1px), linear-gradient(180deg, rgba(5,7,20,0.04) 1px, transparent 1px)",
              backgroundSize: "120px 120px",
            }}
          />
          <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#050714]/5 blur-[150px]" />
        </div>
        <div className="relative z-10 mb-12 flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#050714]/15 bg-white/70 px-6 py-2 text-[10px] uppercase tracking-[0.4em] text-[#050714]/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#050714]" />
            Signal Stack
          </span>
          <Typography variant="h2" color="#050714" weight="bold">
            UseCase
          </Typography>
          <p className="max-w-3xl text-sm text-[#050714]/65 md:text-base">
            Move from raw alpha to automation-ready signals with the same crisp
            styling as our hero—structured, trustworthy, and easy to scan.
          </p>
        </div>
        <div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(320px,1fr)]">
          <div>
            <div className="">
              {approachCards.map((card, index) => {
                const isActive = activeIndex === index;
                return (
                  <div key={card.id} className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      className={`w-full overflow-hidden rounded-[32px] border text-left transition ${
                        isActive
                          ? "border-none bg-[#050714] text-white"
                          : "border-black/10 bg-white text-black/50 hover:border-black/30"
                      }`}
                    >
                      <div className="overflow-hidden px-6 py-8">
                        <div
                          className="flex gap-12 whitespace-nowrap font-['Space_Grotesk',monospace] text-[clamp(2.4rem,6vw,5rem)] tracking-[0.2em]"
                          style={{
                            animation: `approach-marquee ${
                              isActive ? 9 : 14
                            }s linear infinite`,
                          }}
                          aria-hidden
                        >
                          <span className="flex-1">
                            {card.marquee[0]} · {card.marquee[1]}
                          </span>
                          <span className="flex-1">
                            {card.marquee[0]} · {card.marquee[1]}
                          </span>
                        </div>
                      </div>
                    </button>
                    {card.secondary && (
                      <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                        {card.secondary}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative rounded-[32px] border border-black/10 bg-white p-8 text-[#050714] shadow-[0_25px_120px_rgba(5,7,20,0.08)]">
            <div className="flex items-center justify-between border-b border-black/10 pb-6">
              <CardIcon
                variant={activeCard.icon}
                accent={activeCard.iconAccent}
              />
              <button
                type="button"
                className="text-2xl text-black/40 transition hover:text-black"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % approachCards.length)
                }
                aria-label="Next approach card"
              >
                +
              </button>
            </div>
            <div className="mt-6 space-y-6 text-center">
              <Typography
                variant="h4"
                className="text-[#050714]"
                align="center"
              >
                {activeCard.title}
              </Typography>
              <Description chunks={activeCard.description} />
              {activeCard.status && (
                <p className="text-xs uppercase tracking-[0.4em] text-black/40">
                  {activeCard.status}
                </p>
              )}
              <button
                type="button"
                className="mt-4 inline-flex items-center justify-center rounded-full border border-black/20 px-6 py-3 text-xs uppercase tracking-[0.35em] text-[#050714] transition hover:border-black hover:bg-black hover:text-white"
              >
                {activeCard.ctaLabel}
              </button>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes approach-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}

export default Usecase;
