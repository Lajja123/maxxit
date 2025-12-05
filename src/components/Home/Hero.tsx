"use client";

import React from "react";
import Button from "@/components/UI/Button";
import Typography from "@/theme/Typography";
import { ScrollReveal } from "@/components/UI/AnimatedText";

// Floating signal card component
const SignalCard = ({
  type,
  coin,
  change,
  delay,
}: {
  type: "bullish" | "bearish";
  coin: string;
  change: string;
  delay: string;
}) => {
  const isBullish = type === "bullish";
  return (
    <div
      className={`animate-float rounded-xl lg:rounded-2xl border border-black/10 bg-white/80 backdrop-blur-sm p-3 lg:p-4 shadow-lg`}
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center gap-2 lg:gap-3">
        <div
          className={`h-8 w-8 lg:h-10 lg:w-10 rounded-full flex items-center justify-center ${
            isBullish ? "bg-emerald-500/20" : "bg-red-500/20"
          }`}
        >
          <svg
            className={`h-4 w-4 lg:h-5 lg:w-5 ${isBullish ? "text-emerald-600" : "text-red-600 rotate-180"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
        <div>
          <p className="font-mori text-xs lg:text-sm font-semibold text-black">{coin}</p>
          <p className={`font-bohemian text-[10px] lg:text-xs ${isBullish ? "text-emerald-600" : "text-red-600"}`}>
            {change}
          </p>
        </div>
      </div>
    </div>
  );
};

// Twitter insight card
const TwitterInsightCard = ({ delay }: { delay: string }) => (
  <div
    className="animate-float rounded-2xl border border-black/10 bg-white/90 backdrop-blur-sm p-4 shadow-lg max-w-[240px]"
    style={{ animationDelay: delay }}
  >
    <div className="flex items-start gap-3">
      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shrink-0">
        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 4.01c-.77.35-1.6.58-2.47.69A4.15 4.15 0 0021.43 2a8.28 8.28 0 01-2.63 1.01 4.12 4.12 0 00-7 3.76A11.7 11.7 0 013 3.13a4.12 4.12 0 001.28 5.5 4.07 4.07 0 01-1.86-.52v.05a4.12 4.12 0 003.3 4 4.2 4.2 0 01-1.85.07 4.13 4.13 0 003.85 2.86A8.27 8.27 0 012 18.58a11.67 11.67 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.34 8.34 0 0022 4.01z" />
        </svg>
      </div>
      <div>
        <p className="font-mori text-xs font-semibold text-black">Trending Signal</p>
        <p className="font-bohemian text-[10px] text-black/60 mt-1">
          AI detected bullish sentiment across 1.2k tweets
        </p>
      </div>
    </div>
  </div>
);

// Live pulse indicator
const LivePulse = () => (
  <div className="flex items-center gap-2">
    <span className="relative flex h-2.5 w-2.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
    </span>
    <span className="font-bohemian text-xs uppercase tracking-widest text-black/60">Live</span>
  </div>
);

// Animated Title with blur reveal per word
const AnimatedTitle = () => {
  const words = ["Insights", "that", "Lead", "with"];
  const highlightWord = "Proven";
  const endWord = "Intelligence";

  return (
    <div className="perspective-1000">
      <Typography variant="h1" weight="bold" className="inline">
        {words.map((word, index) => (
          <span
            key={word}
            className="inline-block animate-blur-reveal opacity-0"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
          >
            {word}&nbsp;
          </span>
        ))}
        <span
          className="inline-block animate-blur-reveal opacity-0"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            {highlightWord}
          </span>
        </span>
        &nbsp;
        <span
          className="inline-block animate-blur-reveal opacity-0"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          {endWord}
        </span>
      </Typography>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center h-full pt-20 md:pt-24">
          {/* Left Content - Text */}
          <div className="flex flex-col justify-center order-2 lg:order-1">

            {/* Title with blur reveal */}
            <AnimatedTitle />

            {/* Subtitle with blur reveal */}
            <div className="mt-4 lg:mt-6 max-w-xl">
              <p
                className="font-bohemian text-sm sm:text-base md:text-lg lg:text-xl text-black/70 leading-relaxed animate-blur-reveal opacity-0"
                style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
              >
                Say goodbye to guesswork. Our AI analyzes Twitter trends and delivers precise trading signals—helping you stay ahead with real-time crypto insights.
              </p>
            </div>

            {/* Buttons with staggered blur reveal */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 lg:mt-8">
              <div
                className="animate-blur-reveal opacity-0"
                style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
              >
                <Button variant="black">Launch App</Button>
              </div>
              <div
                className="animate-blur-reveal opacity-0"
                style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
              >
                <Button variant="white">Share Your Signals</Button>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative order-1 lg:order-2 h-[45vh] sm:h-[50vh] lg:h-[70vh] max-h-[500px] lg:max-h-none">
            {/* Main Visual Container */}
            <div className="relative h-full w-full">
              {/* Gradient Background Orb */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] animate-blur-reveal-scale opacity-0"
                style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-200/40 via-amber-100/30 to-orange-300/40 blur-3xl animate-pulse-slow" />
              </div>

              {/* Center Dashboard Card */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[280px] lg:w-[320px] animate-blur-reveal-scale opacity-0"
                style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
              >
                <div className="rounded-2xl lg:rounded-3xl border border-black/10 bg-white/90 backdrop-blur-md p-4 lg:p-5 shadow-2xl">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-mori text-xs lg:text-sm font-semibold text-black">Market Overview</h3>
                    <LivePulse />
                  </div>
                  
                  {/* Mini Chart */}
                  <div className="h-16 lg:h-20 mb-3 rounded-xl bg-gradient-to-b from-emerald-50 to-white border border-emerald-100 flex items-end justify-center p-2 gap-1">
                    {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95].map((height, i) => (
                      <div
                        key={i}
                        className="w-3 sm:w-4 rounded-t bg-gradient-to-t from-emerald-500 to-emerald-400 animate-scroll-slide-up opacity-0"
                        style={{ 
                          height: `${height}%`,
                          animationDelay: `${0.6 + i * 0.05}s`,
                          animationFillMode: "forwards"
                        }}
                      />
                    ))}
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-lg lg:rounded-xl bg-emerald-50 p-2 lg:p-3">
                      <p className="font-bohemian text-[9px] lg:text-[10px] uppercase text-emerald-600">Bullish</p>
                      <p className="font-mori text-base lg:text-lg font-bold text-emerald-700">67%</p>
                    </div>
                    <div className="rounded-lg lg:rounded-xl bg-red-50 p-2 lg:p-3">
                      <p className="font-bohemian text-[9px] lg:text-[10px] uppercase text-red-600">Bearish</p>
                      <p className="font-mori text-base lg:text-lg font-bold text-red-700">33%</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards with blur reveal */}
              <div 
                className="hidden sm:block absolute top-2 lg:top-4 right-0 lg:right-4 animate-blur-reveal-right opacity-0"
                style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
              >
                <SignalCard type="bullish" coin="BTC/USDT" change="+5.24%" delay="0s" />
              </div>

              <div 
                className="hidden sm:block absolute bottom-8 lg:bottom-16 left-0 lg:left-4 animate-blur-reveal-left opacity-0"
                style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
              >
                <SignalCard type="bearish" coin="ETH/USDT" change="-2.18%" delay="0.5s" />
              </div>

              <div 
                className="hidden lg:block absolute top-16 -left-4 animate-blur-reveal-left opacity-0"
                style={{ animationDelay: "1s", animationFillMode: "forwards" }}
              >
                <TwitterInsightCard delay="0.25s" />
              </div>

              {/* Decorative Elements */}
              <div 
                className="hidden sm:block absolute bottom-4 right-4 lg:bottom-8 lg:right-8 animate-blur-reveal-scale opacity-0"
                style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
              >
                <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-xl lg:rounded-2xl border border-black/10 bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg animate-float">
                  <svg className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
