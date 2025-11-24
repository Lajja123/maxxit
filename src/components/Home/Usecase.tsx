"use client";

import React, { useState } from "react";

import Typography from "../UI/Typography";

const usecases = [
  {
    id: "zkk",
    code: "01",
    label: "ZKKYC",
    heading: "A zero-knowledge identity layer for frictionless onboarding.",
    description:
      "Verify legal identities anywhere in the world without pushing sensitive files to centralized servers. Credentials stay encrypted inside the wallet until a verifier proves eligibility through zk attestations.",
    metrics: [
      { label: "Verification time", value: "< 30s" },
      { label: "Manual reviews", value: "0 paperwork" },
      { label: "Privacy leakage", value: "No PII in transit" },
    ],
    bullets: [
      "Reusable zk attestations unlock cross-app composability.",
      "Embedded liveness checks remove the need for video calls.",
      "Audit-ready proofs satisfy both fintech and enterprise flows.",
    ],
  },
  {
    id: "defi",
    code: "02",
    label: "Under-collateralized DeFi lending",
    heading: "Credit rails for on-chain lenders without exposing identity.",
    description:
      "Pair zkKYC credentials with credit scoring oracles so institutions can lend against verifiable reputations while borrowers keep control over their raw documents.",
    metrics: [
      { label: "Capital efficiency", value: "3.4x" },
      { label: "Fraud flags", value: "Automated" },
      { label: "Supported chains", value: "EVM + Solana" },
    ],
    bullets: [
      "Per-transaction proofs validate jurisdictional compliance.",
      "Configurable disclosure policies adapt to local regulators.",
      "Plug-and-play widgets drop inside existing lending UIs.",
    ],
  },
  {
    id: "health",
    code: "03",
    label: "Healthcare zk-data marketplace",
    heading: "Exchange research-grade datasets while staying HIPAA-safe.",
    description:
      "Patients mint encrypted health profiles and lease access via zero-knowledge queries. Data buyers receive only the computed insights, never raw records.",
    metrics: [
      { label: "Release control", value: "Patient-owned" },
      { label: "Data usage", value: "Policy locked" },
      { label: "Insights delivered", value: "Aggregated only" },
    ],
    bullets: [
      "Query-level proofs enforce pre-negotiated consent rules.",
      "Built-in royalty logic streams payouts to contributors.",
      "Medical partners audit activity through immutable logs.",
    ],
  },
  {
    id: "jobs",
    code: "04",
    label: "Decentralized job marketplace",
    heading: "Trust-minimized recruiting with zk-backed credentials.",
    description:
      "Talent proves skills, work history, and background checks without revealing personal data. Employers unlock verified info only after mutual interest.",
    metrics: [
      { label: "Screening time", value: "-70%" },
      { label: "Talent passport", value: "Wallet native" },
      { label: "Identity exposure", value: "Selective" },
    ],
    bullets: [
      "One-click NDAs & compliance steps via programmable proofs.",
      "zk attestations cover education, certifications, and payroll.",
      "Global hiring stays compliant with jurisdiction toggles.",
    ],
  },
];

function Usecase() {
  const [activeUsecaseId, setActiveUsecaseId] = useState(usecases[0].id);

  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/60 px-6 py-12 text-white shadow-[0_20px_120px_rgba(7,10,18,0.8)] sm:px-10 lg:px-16 lg:py-16">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-1 bg-[#C7FF52]" />
      </div>
      <Typography variant="h5" color="white" weight="bold">
        Usecase
      </Typography>

      <div className="relative mt-12 space-y-4">
        {usecases.map((usecase) => {
          const isActive = usecase.id === activeUsecaseId;
          return (
            <div
              key={usecase.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-black/40"
            >
              <button
                onClick={() => setActiveUsecaseId(usecase.id)}
                className={`flex w-full items-center justify-between gap-4 px-4 py-5 text-left transition-colors lg:px-8 ${
                  isActive ? "bg-white/5" : "hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-6">
                  <span
                    className={`text-xs font-semibold tracking-[0.4em] ${
                      isActive ? "text-[#C7FF52]" : "text-white/40"
                    }`}
                  >
                    {usecase.code}
                  </span>
                  <p
                    className={`text-sm uppercase tracking-[0.25em] ${
                      isActive ? "text-white" : "text-white/70"
                    }`}
                  >
                    {usecase.label}
                  </p>
                </div>
                <span
                  className={`text-xs uppercase tracking-[0.4em] ${
                    isActive ? "text-[#C7FF52]" : "text-white/40"
                  }`}
                >
                  {isActive ? "Active" : "Expand"}
                </span>
              </button>
              <div
                className={`transition-all duration-500 ${
                  isActive ? "max-h-[1600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {isActive && (
                  <div className="border-t border-white/5 px-4 pb-8 pt-6 text-left lg:px-8">
                    <Typography variant="h3" weight="bold" color="white">
                      {usecase.heading}
                    </Typography>
                    <p className="mt-4 max-w-4xl text-sm text-white/70 md:text-base">
                      {usecase.description}
                    </p>
                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                      {usecase.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5"
                        >
                          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                            {metric.label}
                          </p>
                          <p className="text-2xl font-semibold text-white">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>
                    <ul className="mt-6 space-y-3 text-sm text-white/70">
                      {usecase.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[#C7FF52]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Usecase;
