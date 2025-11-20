"use client";

import React, { useRef, useEffect } from "react";
import { Typography } from "../UI/Typography";
import Button from "../UI/Button";
import { ScrollReveal } from "../UI/ScrollReveal";
import { ScrollRevealText } from "../UI/ScrollRevealText";

// Rocket icon SVG for Launch App button
const RocketIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0L9.5 4H10.5L8.5 8L12 6.5L14 7L10 11L8.5 10.5L6.5 12.5L7 14L5.5 11L3.5 9.5L5 8L2 6.5L8 0Z"
      fill="currentColor"
    />
  </svg>
);

interface HeroProps {
  onMount?: (start: number, end: number) => void;
}

function Hero({ onMount }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && onMount) {
      const updatePosition = () => {
        const rect = heroRef.current?.getBoundingClientRect();
        if (rect) {
          const start = rect.top + window.scrollY;
          const end = rect.bottom + window.scrollY;
          onMount(start, end);
        }
      };

      updatePosition();
      window.addEventListener("resize", updatePosition);

      return () => {
        window.removeEventListener("resize", updatePosition);
      };
    }
  }, [onMount]);

  return (
    <div
      ref={heroRef}
      className="relative flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 bg-white"
    >
      {/* Main Content - Centered */}
      <div className="max-w-4xl mx-auto text-center w-full">
        {/* Main Heading */}
        <ScrollReveal direction="up" delay={0.1} duration={0.8}>
          <Typography
            variant="h1"
            color="primary"
            weight="medium"
            align="center"
            className="mb-6 sm:mb-8 md:mb-10"
          >
            Insights that Lead with
            <br />
            Proven Intelligence
          </Typography>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollRevealText delay={0.3} duration={0.8}>
          <Typography
            variant="body"
            color="secondary"
            weight="normal"
            align="center"
            className="max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-15"
          >
            Say goodbye to guesswork. Our AI analyzes Twitter trends and
            delivers precise trading signals—helping you stay ahead with
            real-time crypto insights.
          </Typography>
        </ScrollRevealText>

        {/* Buttons */}
        <ScrollReveal direction="up" delay={0.5} duration={0.8}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
            <Button
              variant="black"
              icon={<RocketIcon />}
              iconPosition="left"
              className="w-full sm:w-auto"
              paddingX="px-10"
              paddingY="py-4"
            >
              Launch App
            </Button>
            <Button
              variant="white"
              className="w-full sm:w-auto"
              paddingX="px-10"
              paddingY="py-4"
            >
              Share Your Signals
            </Button>
          </div>
        </ScrollReveal>

        {/* Image placeholder - will be replaced by animated image */}
        <div className="h-[500px] w-full flex items-center justify-center" />
      </div>
    </div>
  );
}

export default Hero;
