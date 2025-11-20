import React from "react";
import { Typography } from "../UI/Typography";

const steps = [
  {
    title: "Connect sources",
    description:
      "Attach your wallets, CEX accounts, and social handles to seed the agent with signals.",
  },
  {
    title: "Train preferences",
    description:
      "Define risk envelope, preferred sectors, and timeframes to guide allocations.",
  },
  {
    title: "Automate follow-ups",
    description:
      "Trigger alerts, copy-trade rules, or auto-generated reports straight to your desk.",
  },
];

function Walkthrough() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-2">
        <Typography variant="h2" color="white" weight="bold">
          Maxxit walkthrough
        </Typography>
        <p className="text-sm text-white/60">
          Three steps to deploy an intelligence layer that works while you
          sleep.
        </p>
      </div>

      <ol className="space-y-8">
        {steps.map((step, index) => (
          <li key={step.title} className="flex gap-5">
            <div className="flex flex-col items-center text-white/60">
              <div className=" border border-white/20 px-3 py-1 text-xs leading-none">
                {String(index + 1).padStart(2, "0")}
              </div>
              {index !== steps.length - 1 && (
                <div className="my-2 h-full w-px flex-1 bg-linear-to-b from-white/20 to-transparent" />
              )}
            </div>
            <div className="flex-1  border border-white/10 bg-[#05070C] p-6">
              <Typography variant="h4" color="white" weight="semibold">
                {step.title}
              </Typography>
              <p className="mt-3 text-sm text-white/70">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Walkthrough;
