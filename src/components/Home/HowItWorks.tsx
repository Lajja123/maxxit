"use client";

import React, { useEffect, useRef, useState } from "react";
import Typography from "@/theme/Typography";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const STEPS = [
  {
    id: 1,
    title: "Connect Your Safe Wallet",
    shortTitle: "Connect",
    description:
      "Connect your Arbitrum Safe wallet (or create one at app.safe.global). Fund it with USDC for trading.",
    highlight: "Gas fees are handled by Maxxit - no need to hold ETH.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Browse Agent Marketplace",
    shortTitle: "Browse",
    description:
      "Explore agents created by the community. Each agent uses multi-parameter analysis with unique strategy configuration.",
    highlight: "Review performance metrics, Impact Factor scores, and risk parameters.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Enable Trading Module",
    shortTitle: "Enable",
    description:
      "One-time setup that grants limited permissions for trade execution only.",
    highlight: "The module CANNOT withdraw funds or perform any other actions.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Fund and Activate",
    shortTitle: "Activate",
    description:
      "Approve USDC to the module and initialize capital tracking.",
    highlight: "Your agent will begin executing trades automatically.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Monitor & Control",
    shortTitle: "Monitor",
    description:
      "Link Telegram for instant notifications. Track positions, PnL, and execute manual trades.",
    highlight: 'Use commands like "Buy 10 USDC of WETH".',
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    ),
  },
];

// Animated SVG Path Component
const AnimatedPath = ({ progress }: { progress: number }) => {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  return (
    <svg
      className="absolute left-0 top-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 500"
      preserveAspectRatio="none"
    >
      {/* Background dashed path */}
      <path
        d="M 50 30 
           C 80 60, 20 100, 50 130 
           C 80 160, 20 200, 50 230 
           C 80 260, 20 300, 50 330 
           C 80 360, 20 400, 50 430
           L 50 470"
        fill="none"
        stroke="rgba(0,0,0,0.08)"
        strokeWidth="2"
        strokeDasharray="6 4"
      />
      
      {/* Animated progress path */}
      <path
        ref={pathRef}
        d="M 50 30 
           C 80 60, 20 100, 50 130 
           C 80 160, 20 200, 50 230 
           C 80 260, 20 300, 50 330 
           C 80 360, 20 400, 50 430
           L 50 470"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        style={{
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength - (pathLength * progress),
          transition: "stroke-dashoffset 0.5s ease-out",
        }}
      />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      {/* Glowing dot at current position */}
      <circle
        cx="50"
        cy={30 + (440 * progress)}
        r="6"
        fill="#f97316"
        className="animate-pulse"
      >
        <animate
          attributeName="r"
          values="4;7;4"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="50"
        cy={30 + (440 * progress)}
        r="12"
        fill="none"
        stroke="#f97316"
        strokeWidth="2"
        opacity="0.3"
      >
        <animate
          attributeName="r"
          values="8;16;8"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.4;0;0.4"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

// Step Card with scroll reveal
const StepCard = ({
  step,
  index,
  isActive,
  isVisible,
}: {
  step: (typeof STEPS)[0];
  index: number;
  isActive: boolean;
  isVisible: boolean;
}) => (
  <div
    className={`relative p-6 lg:p-8 rounded-3xl border transition-all duration-700 ${
      isActive
        ? "bg-black text-white border-black shadow-2xl scale-100"
        : "bg-white/80 text-black border-black/10 shadow-lg scale-[0.98]"
    } ${
      isVisible
        ? "opacity-100 translate-y-0 blur-0"
        : "opacity-0 translate-y-12 blur-sm"
    }`}
    style={{
      transitionDelay: `${index * 0.1}s`,
    }}
  >
    {/* Animated connector line to next step */}
    {index < STEPS.length - 1 && (
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8 overflow-hidden">
        <div
          className={`w-full h-full transition-all duration-700 ${
            isActive ? "bg-gradient-to-b from-orange-500 to-transparent animate-pulse" : "bg-black/10"
          }`}
        />
      </div>
    )}

    {/* Step indicator */}
    <div className="flex items-center gap-4 mb-6">
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-mori font-bold text-lg transition-all duration-500 ${
          isActive ? "bg-white text-black" : "bg-black/5 text-black/60"
        }`}
      >
        {step.id}
      </div>
      <div className={`flex-1 h-px relative overflow-hidden ${isActive ? "bg-white/10" : "bg-black/10"}`}>
        {/* Animated shine */}
        {isActive && (
          <div className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
        )}
      </div>
      <span
        className={`font-bohemian text-xs uppercase tracking-widest ${
          isActive ? "text-white/60" : "text-black/40"
        }`}
      >
        Step {step.id}
      </span>
    </div>

    {/* Icon */}
    <div
      className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl p-3.5 mb-6 transition-all duration-500 ${
        isActive
          ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25"
          : "bg-black/5 text-black/70"
      }`}
    >
      {step.icon}
    </div>

    {/* Content */}
    <h3
      className={`font-mori text-xl lg:text-2xl font-bold mb-3 ${
        isActive ? "text-white" : "text-black"
      }`}
    >
      {step.title}
    </h3>
    <p
      className={`font-bohemian text-sm lg:text-base leading-relaxed mb-3 ${
        isActive ? "text-white/80" : "text-black/60"
      }`}
    >
      {step.description}
    </p>
    <p
      className={`font-bohemian text-sm lg:text-base leading-relaxed font-medium ${
        isActive ? "text-orange-300" : "text-black"
      }`}
    >
      {step.highlight}
    </p>
  </div>
);

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.2 });

  // Scroll spy for steps + progress tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepsRef.current.forEach((stepEl, index) => {
      if (stepEl) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) =>
                prev.includes(index + 1) ? prev : [...prev, index + 1]
              );
              if (entry.intersectionRatio > 0.5) {
                setActiveStep(index + 1);
                setScrollProgress((index + 1) / STEPS.length);
              }
            }
          },
          {
            threshold: [0.2, 0.5, 0.8],
            rootMargin: "-10% 0px -10% 0px",
          }
        );
        observer.observe(stepEl);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-24">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/10 mb-6 shadow-sm ${
              headerInView ? "animate-blur-reveal" : "opacity-0"
            }`}
            style={{ animationFillMode: "forwards" }}
          >
            <span className="font-bohemian text-xs uppercase tracking-widest text-black/60">
              Getting Started
            </span>
          </div>

          <div
            className={`mb-4 ${headerInView ? "animate-blur-reveal" : "opacity-0"}`}
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <Typography variant="h2" weight="bold" align="center">
              How It Works
            </Typography>
          </div>

          <p
            className={`font-bohemian text-base lg:text-lg text-black/60 max-w-2xl mx-auto ${
              headerInView ? "animate-blur-reveal" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" } as React.CSSProperties}
          >
            Get started with Maxxit in five simple steps
          </p>
        </div>

        {/* Main Layout */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Left - Sticky Progress with Animated Line */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-32 h-[500px] relative">
              {/* Animated SVG Path */}
              <AnimatedPath progress={scrollProgress} />

              {/* Step indicators overlaid on path */}
              <div className="absolute inset-0 flex flex-col justify-between py-4">
                {STEPS.map((step, index) => (
                  <div key={step.id} className="flex items-center gap-4 pl-8">
                    {/* Circle */}
                    <div
                      className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-mori font-bold text-sm transition-all duration-500 ${
                        activeStep === step.id
                          ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white scale-110 shadow-lg shadow-orange-500/30"
                          : activeStep > step.id
                          ? "bg-black text-white"
                          : "bg-white border-2 border-black/20 text-black/40"
                      }`}
                    >
                      {activeStep > step.id ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        step.id
                      )}
                      
                      {/* Active ring animation */}
                      {activeStep === step.id && (
                        <>
                          <span className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-30" />
                          <span className="absolute -inset-2 rounded-full border-2 border-orange-500/30 animate-pulse" />
                        </>
                      )}
                    </div>

                    {/* Label */}
                    <div className="flex-1">
                      <p
                        className={`font-mori font-semibold transition-all duration-300 ${
                          activeStep === step.id ? "text-black translate-x-1" : "text-black/40"
                        }`}
                      >
                        {step.shortTitle}
                      </p>
                      <p
                        className={`font-bohemian text-xs transition-colors duration-300 ${
                          activeStep === step.id ? "text-orange-500" : "text-black/30"
                        }`}
                      >
                        Step {step.id}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Scrolling Step Cards */}
          <div className="lg:col-span-8 space-y-8">
            {STEPS.map((step, index) => (
              <div
                key={step.id}
                ref={(el) => {
                  stepsRef.current[index] = el;
                }}
              >
                <StepCard
                  step={step}
                  index={index}
                  isActive={activeStep === step.id}
                  isVisible={visibleSteps.includes(step.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Progress Indicator */}
        <div className="lg:hidden mt-12">
          <div className="flex items-center justify-center gap-2">
            {STEPS.map((step) => (
              <div
                key={step.id}
                className={`h-2 rounded-full transition-all duration-500 ${
                  activeStep === step.id
                    ? "w-8 bg-gradient-to-r from-orange-500 to-amber-500"
                    : activeStep > step.id
                    ? "w-2 bg-black"
                    : "w-2 bg-black/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
