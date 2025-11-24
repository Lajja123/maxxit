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
  secondary?: string;
  status?: string;
  description: DescriptionChunk[];
  ctaLabel: string;
  ctaHref?: string;
};

const highlightColor = "#C7FF52";

const approachCards: ApproachCard[] = [
  {
    id: "transgate",
    marquee: ["TRANSGATE", "TRANSGATE"],
    description: [
      { type: "highlight", text: "TRANSGATE" },
      {
        type: "text",
        text: " is a foundational product that fuses three key technologies: MPC network, interactive zero-knowledge proof system, and the 3P-TLS protocol. The platform shuttles private data from Web2 into Web2 or Web3 targets without leakage.",
      },
    ],
    ctaLabel: "Install",
  },
  {
    id: "transgate-sdk",
    marquee: ["TRANSGATE SDK", "TRANSGATE"],
    description: [
      { type: "text", text: "The included " },
      { type: "highlight", text: "CLIENT-SDK" },
      { type: "text", text: " and " },
      { type: "highlight", text: "SERVER-SDK" },
      {
        type: "text",
        text: " offer low-code integrations that let businesses trust zero-knowledge proofs coming from verified data partners without giving up privacy.",
      },
    ],
    ctaLabel: "Transgate SDK Doc",
  },
  {
    id: "schema",
    marquee: ["SCHEMA", "SCHEMA"],
    secondary: "Coming soon",
    status: "Coming soon",
    description: [
      { type: "highlight", text: "SCHEMA" },
      {
        type: "text",
        text: " is the programmable layer that maps proofs into reusable access policies. Audit-grade templates orchestrate attestations, redactions, and verifier-specific payloads.",
      },
    ],
    ctaLabel: "Join Waitlist",
  },
];

const Description: React.FC<{ chunks: DescriptionChunk[] }> = ({ chunks }) => (
  <p className="text-sm leading-relaxed text-white md:text-base">
    {chunks.map((chunk, index) =>
      chunk.type === "highlight" ? (
        <span
          key={`${chunk.text}-${index}`}
          className="bg-[#C7FF52]/30 px-1 font-semibold text-[#C7FF52]"
        >
          {chunk.text}
        </span>
      ) : (
        <span key={`${chunk.text}-${index}`}>{chunk.text}</span>
      )
    )}
  </p>
);

const ApproachGlyph = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 200 200"
    aria-hidden="true"
    role="presentation"
  >
    <rect x="20" y="20" width="60" height="60" rx="14" fill={highlightColor} />
    <rect x="120" y="20" width="60" height="60" rx="14" fill={highlightColor} />
    <rect x="20" y="120" width="60" height="60" rx="14" fill={highlightColor} />
    <rect
      x="120"
      y="120"
      width="60"
      height="60"
      rx="14"
      fill={highlightColor}
    />
    <rect x="85" y="85" width="30" height="30" rx="8" fill="black" />
    <rect x="45" y="95" width="110" height="10" rx="5" fill={highlightColor} />
    <rect x="95" y="45" width="10" height="110" rx="5" fill={highlightColor} />
  </svg>
);

function GetStarted() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCard = useMemo(() => approachCards[activeIndex], [activeIndex]);

  return (
    <>
      <section className="relative overflow-hidden bg-black px-4 py-20 text-white sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "120px 120px",
            }}
          />
          <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#C7FF52]/10 blur-[150px]" />
        </div>

        <div className="relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(320px,1fr)]">
          <div>
            <Typography variant="h5" color="white" weight="bold">
              Get started
            </Typography>
            <div className="mt-8 space-y-6">
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
                          ? "border-none bg-[#C7FF52] text-black shadow-[0_20px_80px_rgba(199,255,82,0.3)]"
                          : "border-white/10 bg-transparent text-white/30 hover:border-white/30"
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
                      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                        {card.secondary}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative rounded-[32px] border border-white/10 bg-[#050506] p-8 shadow-[0_25px_120px_rgba(0,0,0,0.65)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <ApproachGlyph />
              <button
                type="button"
                className="text-2xl text-white/40 transition hover:text-white"
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % approachCards.length)
                }
                aria-label="Next approach card"
              >
                +
              </button>
            </div>
            <div className="mt-6 space-y-6">
              <Description chunks={activeCard.description} />
              {activeCard.status && (
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                  {activeCard.status}
                </p>
              )}
              <button
                type="button"
                className="mt-4 inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-xs uppercase tracking-[0.35em] text-white transition hover:border-white hover:bg-white hover:text-black"
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

export default GetStarted;
