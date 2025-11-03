import React from "react";

function Hero() {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-16 md:py-24">
      {/* Left Decorative Icon */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 24 C8 20, 12 16, 16 12 C20 16, 24 20, 28 24"
              stroke="#FF9500"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 20 C8 16, 12 12, 16 8 C20 12, 24 16, 28 20"
              stroke="#FF9500"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Right Decorative Icon */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl flex items-center justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Robot Head Outline */}
            <rect
              x="6"
              y="8"
              width="20"
              height="16"
              rx="2"
              stroke="#A855F7"
              strokeWidth="2"
              fill="none"
            />
            {/* Left Eye */}
            <circle
              cx="12"
              cy="14"
              r="2"
              stroke="#A855F7"
              strokeWidth="2"
              fill="none"
            />
            {/* Right Eye */}
            <circle
              cx="20"
              cy="14"
              r="2"
              stroke="#A855F7"
              strokeWidth="2"
              fill="none"
            />
            {/* Mouth */}
            <path
              d="M10 20 Q16 22 22 20"
              stroke="#A855F7"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative text-center max-w-4xl mx-auto">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
          Insights that Lead with
          <br />
          Proven Intelligence
        </h1>

        {/* Body Text */}
        <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Say goodbye to guesswork. Our AI analyzes Twitter trends and delivers
          <br className="hidden sm:block" />
          precise trading signals—helping you stay ahead with real-time crypto
          insights.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Launch App Button - Primary */}
          <button className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 group">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-1 transition-transform"
            >
              {/* Rocket Body */}
              <path d="M8 2 L10 6 L8 7 L6 6 Z" fill="currentColor" />
              <rect x="7.5" y="7" width="1" height="6" fill="currentColor" />
              {/* Rocket Fins */}
              <path
                d="M7 13 L5 15 M9 13 L11 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Rocket Flame */}
              <path d="M7 13 Q8 15 9 13" fill="currentColor" opacity="0.7" />
            </svg>
            Launch App
          </button>

          {/* Share Your Signals Button - Secondary */}
          <button className="bg-white text-black px-8 py-3 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors">
            Share Your Signals
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
