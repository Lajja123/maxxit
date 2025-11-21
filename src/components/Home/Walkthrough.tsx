"use client";

import React, { useState, useEffect, useRef } from "react";
import { Typography } from "../UI/Typography";

// Dummy SVG graphics for each step
const StepGraphics = [
  // Step 1: Abstract circuit/puzzle piece
  () => (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#59FFAF">
        {/* 2x2 grid of rounded squares with connections */}
        <rect x="80" y="80" width="80" height="80" rx="12" />
        <rect x="240" y="80" width="80" height="80" rx="12" />
        <rect x="80" y="240" width="80" height="80" rx="12" />
        <rect x="240" y="240" width="80" height="80" rx="12" />
        {/* Horizontal connections */}
        <rect x="160" y="115" width="80" height="10" rx="5" />
        <rect x="160" y="275" width="80" height="10" rx="5" />
        {/* Vertical connections */}
        <rect x="115" y="160" width="10" height="80" rx="5" />
        <rect x="275" y="160" width="10" height="80" rx="5" />
        {/* Side connectors */}
        <circle cx="40" cy="200" r="15" />
        <circle cx="360" cy="200" r="15" />
      </g>
    </svg>
  ),
  // Step 2: Network nodes
  () => (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#59FFAF" strokeWidth="3" fill="#59FFAF">
        <circle cx="200" cy="100" r="25" />
        <circle cx="100" cy="200" r="25" />
        <circle cx="300" cy="200" r="25" />
        <circle cx="200" cy="300" r="25" />
        <line x1="200" y1="100" x2="100" y2="200" />
        <line x1="200" y1="100" x2="300" y2="200" />
        <line x1="100" y1="200" x2="200" y2="300" />
        <line x1="300" y1="200" x2="200" y2="300" />
        <line x1="200" y1="100" x2="200" y2="300" />
      </g>
    </svg>
  ),
  // Step 3: Security shield
  () => (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#59FFAF">
        <path d="M200 80 L280 120 L280 220 Q280 280 200 320 Q120 280 120 220 L120 120 Z" />
        <circle cx="200" cy="200" r="40" fill="#000" />
        <path
          d="M185 200 L195 210 L215 190"
          stroke="#59FFAF"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  ),
];

const walkthroughSteps = [
  {
    id: "tls",
    title: "TLS",
    label: "TRANSPORT LAYER SECURITY",
    description:
      "ZKPASS INTEGRATES DECENTRALIZED MPC NODES INTO A 3-PARTY HANDSHAKE PROCESS, IMPROVING THE STANDARD TLS PROTOCOL. IT ALLOWS USERS TO LOG IN SECURELY AND GENERATE ZKPS LOCALLY WITHOUT API ACCESS OR DATA SOURCE AUTHORIZATION.",
    icon: (
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-[#59FFAF]" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-[#59FFAF]" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
        </div>
      </div>
    ),
    Graphic: StepGraphics[0],
  },
  {
    id: "mpc",
    title: "MPC",
    label: "MULTI-PARTY COMPUTATION",
    description:
      "OUR DECENTRALIZED MPC NETWORK ENSURES THAT NO SINGLE PARTY HAS ACCESS TO COMPLETE USER CREDENTIALS. EACH NODE PROCESSES ONLY A FRAGMENT, ENABLING SECURE AUTHENTICATION WITHOUT CENTRALIZED STORAGE OR TRUST ASSUMPTIONS.",
    icon: (
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-[#59FFAF]" />
          <div className="h-2 w-2 rounded-full bg-[#59FFAF]" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-[#59FFAF]" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-[#59FFAF]" />
        </div>
      </div>
    ),
    Graphic: StepGraphics[1],
  },
  {
    id: "zkp",
    title: "ZKP",
    label: "ZERO-KNOWLEDGE PROOFS",
    description:
      "USERS GENERATE ZERO-KNOWLEDGE PROOFS LOCALLY TO VERIFY IDENTITY AND CREDENTIALS WITHOUT REVEALING SENSITIVE DATA. THIS ENABLES PRIVACY-PRESERVING AUTHENTICATION WHERE PROOF GENERATION HAPPENS ENTIRELY ON THE CLIENT SIDE.",
    icon: (
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-[#59FFAF]" />
          <div className="h-2 w-2 rounded-full bg-[#59FFAF]" />
          <div className="h-2 w-2 rounded-full bg-[#59FFAF]" />
        </div>
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-[#59FFAF]" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-[#59FFAF]" />
        </div>
      </div>
    ),
    Graphic: StepGraphics[2],
  },
];

function Walkthrough() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Find the parent section element
    if (containerRef.current) {
      sectionRef.current = containerRef.current.closest("section");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isCompleted) {
        setIsSticky(false);
        return;
      }

      const section = sectionRef.current;
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;
      const viewportHeight = window.innerHeight;

      // Check if section is in viewport
      const isSectionVisible = sectionTop < viewportHeight && sectionBottom > 0;

      if (!isSectionVisible) {
        if (sectionTop > viewportHeight) {
          // Haven't reached the section yet
          setIsSticky(false);
          // Don't reset completion if user scrolls back up after completing
        } else if (sectionBottom < 0) {
          // Scrolled past the section - mark as completed
          setIsCompleted(true);
          setIsSticky(false);
        }
        return;
      }

      // Section is visible, make it sticky
      setIsSticky(true);

      // Check if we've scrolled past all steps (section is mostly out of view)
      if (sectionBottom < viewportHeight * 0.2) {
        setIsCompleted(true);
        setIsSticky(false);
        return;
      }

      // Calculate which step should be visible based on scroll position
      const sectionStart = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollOffset = window.scrollY - sectionStart;
      const availableScroll = sectionHeight - viewportHeight;

      if (availableScroll > 0) {
        const scrollProgress = Math.min(
          1,
          Math.max(0, scrollOffset / availableScroll)
        );

        // Map scroll progress to step index
        const stepIndex = Math.floor(
          scrollProgress * (walkthroughSteps.length - 1)
        );
        const finalStepIndex = Math.min(stepIndex, walkthroughSteps.length - 1);

        setCurrentStep(finalStepIndex);
      } else {
        // If section is smaller than viewport, show last step
        setCurrentStep(walkthroughSteps.length - 1);
      }
    };

    // Capture refs at the start of the effect
    const currentStepRefs = stepRefs.current;

    // Also observe individual steps for more accurate detection
    const observer = new IntersectionObserver(
      (entries) => {
        if (isCompleted) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = currentStepRefs.findIndex(
              (ref) => ref === entry.target
            );
            if (stepIndex !== -1) {
              setCurrentStep(stepIndex);
            }
          }
        });

        // Check if last step is scrolled past
        const lastStep = currentStepRefs[walkthroughSteps.length - 1];
        if (lastStep) {
          const lastStepRect = lastStep.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          if (lastStepRect.bottom < viewportHeight * 0.2) {
            setIsCompleted(true);
            setIsSticky(false);
          }
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -30% 0px",
        threshold: [0, 0.3, 0.5, 0.7, 1],
      }
    );

    currentStepRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      currentStepRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [isCompleted]);

  const currentStepData = walkthroughSteps[currentStep];

  return (
    <>
      {/* Spacer and step markers for scroll detection - only show when not completed */}
      {!isCompleted && (
        <div ref={containerRef} className="relative">
          {walkthroughSteps.map((_, index) => (
            <div
              key={`spacer-${index}`}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              className="min-h-screen"
              aria-hidden="true"
            />
          ))}
        </div>
      )}

      {/* Completion message - minimal height */}
      {isCompleted && (
        <div className="space-y-4 py-8">
          <div className="flex flex-col gap-2">
            <Typography variant="h2" color="white" weight="bold">
              Maxxit walkthrough
            </Typography>
            <p className="text-sm text-white/60">
              You&apos;ve completed the walkthrough. Explore more features
              below.
            </p>
          </div>
        </div>
      )}

      {/* Fixed overlay that shows current step */}
      {isSticky && !isCompleted && (
        <div className="fixed inset-0 z-[100] bg-black">
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(89,255,175,0.1) 1px, transparent 1px), linear-gradient(180deg, rgba(89,255,175,0.1) 1px, transparent 1px)",
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
          <div className="absolute bottom-4 right-4 text-white/20 text-2xl">
            +
          </div>
          <div className="absolute top-4 left-4 text-white/20 text-2xl">+</div>
          <div className="absolute bottom-4 left-4 text-white/20 text-2xl">
            +
          </div>

          {/* Main content */}
          <div className="relative z-10 flex h-full flex-col lg:flex-row">
            {/* Left Section - Content */}
            <div className="flex flex-1 flex-col justify-between border-r border-dashed border-white/10 p-8 lg:p-12">
              <div className="space-y-6">
                {/* Icon */}
                <div>{currentStepData.icon}</div>

                {/* Title */}
                <h1
                  className="text-6xl lg:text-8xl font-bold leading-tight"
                  style={{
                    WebkitTextStroke: "2px white",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                >
                  {currentStepData.title}
                </h1>

                {/* Description */}
                <p className="max-w-2xl text-sm leading-relaxed text-white lg:text-base">
                  {currentStepData.description}
                </p>
              </div>

              {/* Label and Page Number */}
              <div className="mt-auto space-y-4">
                <div className="inline-block bg-[#59FFAF] px-4 py-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-black">
                    {currentStepData.label}
                  </span>
                </div>
                <div className="text-sm text-white/60">
                  {String(currentStep + 1).padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* Right Section - Graphic */}
            <div className="flex flex-1 items-center justify-center p-8 lg:p-12">
              <div className="relative h-full w-full max-w-2xl">
                <currentStepData.Graphic />
              </div>
            </div>
          </div>

          {/* Step Indicators - Fixed at bottom */}
          <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
            {walkthroughSteps.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentStep ? "w-8 bg-[#59FFAF]" : "w-2 bg-white/20"
                }`}
                aria-label={`Step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Walkthrough;
