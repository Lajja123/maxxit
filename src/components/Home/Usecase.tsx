import React from "react";
import { Typography } from "../UI/Typography";

const usecases = [
  {
    title: "On-chain trend detection",
    description:
      "Identify emerging narratives across blockchains using real-time stream processing and anomaly detection.",
    stat: "+34%",
    subLabel: "alpha captured",
  },
  {
    title: "Community signal boosting",
    description:
      "Aggregate social sentiment from X, Telegram, and Discord, then surface the most consistent traders to follow.",
    stat: "120k",
    subLabel: "signals parsed / day",
  },
  {
    title: "Institutional compliance",
    description:
      "Generate explainable reports with multi-source evidence, ready to share with funds or compliance teams.",
    stat: "42",
    subLabel: "data sources",
  },
];

function Usecase() {
  return (
    <div className="space-y-10">
      <Typography variant="h2" color="white" weight="bold">
        Usecases
      </Typography>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {usecases.map((item) => (
          <div
            key={item.title}
            className="flex h-full flex-col  border border-white/10 bg-[#06090F] p-6"
          >
            <Typography variant="h4" color="white" weight="semibold">
              {item.title}
            </Typography>
            <p className="mt-4 text-sm text-white/70">{item.description}</p>
            <div className="mt-auto pt-6">
              <p className="text-4xl font-bold text-white">{item.stat}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {item.subLabel}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Usecase;
