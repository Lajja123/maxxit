import React from "react";
import { Typography } from "../UI/Typography";

const providers = [
  {
    rank: 1,
    name: "Nova Quant Collective",
    accuracy: "93%",
    followers: "41.2k",
    specialty: "Arb + meme rotations",
  },
  {
    rank: 2,
    name: "Orbit Signals",
    accuracy: "88%",
    followers: "29.4k",
    specialty: "Perp momentum",
  },
  {
    rank: 3,
    name: "DeepFlow Labs",
    accuracy: "86%",
    followers: "18.1k",
    specialty: "On-chain flows",
  },
];

function Signals() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-2">
        <Typography variant="h2" color="white" weight="bold">
          Top weekly signal provider
        </Typography>
        <p className="text-sm text-white/60">
          Ranked by hit rate, drawdown protection, and follower trust score.
        </p>
      </div>

      <div className="overflow-hidden  border border-white/10">
        <div className="grid grid-cols-5 bg-white/5 px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
          <span>#</span>
          <span>Provider</span>
          <span className="text-center">Accuracy</span>
          <span className="text-center">Followers</span>
          <span className="text-right">Focus</span>
        </div>
        {providers.map((provider) => (
          <div
            key={provider.rank}
            className="grid grid-cols-5 items-center border-t border-white/5 px-6 py-5 text-sm text-white/80"
          >
            <span className="text-white">
              {provider.rank.toString().padStart(2, "0")}
            </span>
            <span className="font-semibold text-white">{provider.name}</span>
            <span className="text-center font-semibold text-[#59FFAF]">
              {provider.accuracy}
            </span>
            <span className="text-center">{provider.followers}</span>
            <span className="text-right text-white/70">
              {provider.specialty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Signals;
