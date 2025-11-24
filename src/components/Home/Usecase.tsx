"use client";

import React, { useState } from "react";

const usecases = [
  {
    title: "On-chain trend detection",
    description:
      "Identify emerging narratives across blockchains using real-time stream processing and anomaly detection.",
    stat: "+34%",
    subLabel: "alpha captured",
    icon: (
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#FFD700" strokeWidth="2" fill="#FFD700">
          <circle cx="100" cy="50" r="15" />
          <circle cx="50" cy="100" r="15" />
          <circle cx="150" cy="100" r="15" />
          <circle cx="100" cy="150" r="15" />
          <line x1="100" y1="50" x2="50" y2="100" />
          <line x1="100" y1="50" x2="150" y2="100" />
          <line x1="50" y1="100" x2="100" y2="150" />
          <line x1="150" y1="100" x2="100" y2="150" />
        </g>
      </svg>
    ),
  },
  {
    title: "Community signal boosting",
    description:
      "Aggregate social sentiment from X, Telegram, and Discord, then surface the most consistent traders to follow.",
    stat: "120k",
    subLabel: "signals parsed / day",
    icon: (
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#FFD700" strokeWidth="2" fill="#FFD700">
          <rect x="40" y="40" width="120" height="120" rx="8" />
          <circle cx="100" cy="100" r="30" fill="#000" />
          <path
            d="M85 100 L95 110 L115 90"
            stroke="#FFD700"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Institutional compliance",
    description:
      "Generate explainable reports with multi-source evidence, ready to share with funds or compliance teams.",
    stat: "42",
    subLabel: "data sources",
    icon: (
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#FFD700" strokeWidth="2" fill="#FFD700">
          <path d="M100 30 L160 70 L160 130 Q160 170 100 170 Q40 170 40 130 L40 70 Z" />
          <rect x="70" y="90" width="60" height="40" rx="4" fill="#000" />
          <line
            x1="85"
            y1="110"
            x2="115"
            y2="110"
            stroke="#FFD700"
            strokeWidth="2"
          />
        </g>
      </svg>
    ),
  },
];

function Usecase() {
  const [selectedIndex, setSelectedIndex] = useState(0); // Default to first usecase

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px), linear-gradient(180deg, rgba(255,215,0,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ruler markings */}
      <div className="absolute left-0 top-0 bottom-0 w-8 border-r border-white/10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-0 w-2 border-t border-white/10"
            style={{ top: `${i * 5}%` }}
          />
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-8 border-l border-white/10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute right-0 w-2 border-t border-white/10"
            style={{ top: `${i * 5}%` }}
          />
        ))}
      </div>
      <div className="absolute top-0 left-0 right-0 h-8 border-b border-white/10">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 h-2 border-l border-white/10"
            style={{ left: `${i * 4}%` }}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 border-t border-white/10">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 h-2 border-l border-white/10"
            style={{ left: `${i * 4}%` }}
          />
        ))}
      </div>

      {/* Plus signs at corners */}
      <div className="absolute top-4 right-4 text-white/20 text-2xl">+</div>
      <div className="absolute bottom-4 right-4 text-white/20 text-2xl">+</div>
      <div className="absolute top-4 left-4 text-white/20 text-2xl">+</div>
      <div className="absolute bottom-4 left-4 text-white/20 text-2xl">+</div>

      {/* Main content */}
      <div className="relative z-10 flex h-screen w-full flex-col lg:flex-row">
        {/* Left Section - Stacked Titles */}
        <div className="flex w-full flex-1 flex-col border-r border-dashed border-white/10 p-6 lg:p-8 xl:p-12">
          {/* Label */}
          <div className="mb-8">
            <div className="inline-block border border-white/20 px-3 py-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                USECASES
              </span>
            </div>
          </div>

          {/* Stacked titles with yellow line indicator */}
          <div className="mt-auto flex flex-col gap-6 lg:gap-8">
            {usecases.map((usecase, index) => (
              <div
                key={usecase.title}
                className="relative flex items-center gap-4"
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => setSelectedIndex(index)}
              >
                {/* Yellow line indicator */}
                <div
                  className={`absolute left-0 top-1/2 h-0.5 -translate-y-1/2 transition-all duration-300 ${
                    selectedIndex === index
                      ? "w-full bg-[#FFD700]"
                      : "w-0 bg-[#FFD700]/0"
                  }`}
                />

                {/* Title text */}
                <span
                  className={`relative z-10 text-3xl font-bold uppercase transition-all duration-300 cursor-pointer lg:text-4xl xl:text-5xl ${
                    selectedIndex === index
                      ? "text-[#FFD700] scale-105"
                      : "text-white/30 hover:text-white/50"
                  }`}
                  style={{
                    WebkitTextStroke: "1px currentColor",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                >
                  {usecase.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Content Display */}
        <div className="flex w-full flex-col border-l border-dashed border-white/10 p-6 lg:w-[450px] xl:w-[500px] lg:p-8 xl:p-12">
          <div className="flex h-full flex-col justify-between">
            {/* Icon */}
            <div className="mb-6 h-24 w-24 text-[#FFD700] lg:mb-8 lg:h-32 lg:w-32">
              {usecases[selectedIndex].icon}
            </div>

            {/* Title with highlight */}
            <div className="mb-6">
              <h2
                className="inline-block bg-[#FFD700] px-4 py-2 text-xl font-bold uppercase text-black lg:text-2xl"
                style={{
                  fontFamily: "Arial, Helvetica, sans-serif",
                }}
              >
                {usecases[selectedIndex].title}
              </h2>
            </div>

            {/* Description */}
            <p className="mb-8 text-sm leading-relaxed text-white lg:text-base">
              {usecases[selectedIndex].description}
            </p>

            {/* Stats */}
            <div className="mt-auto space-y-2">
              <p className="text-4xl font-bold text-white lg:text-5xl">
                {usecases[selectedIndex].stat}
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                {usecases[selectedIndex].subLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usecase;
