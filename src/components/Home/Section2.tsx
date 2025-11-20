"use client";

import React, { useRef, useEffect } from "react";
import { Typography } from "../UI/Typography";
import { ScrollReveal } from "../UI/ScrollReveal";

interface Section2Props {
  onMount?: (start: number, end: number) => void;
}

function Section2({ onMount }: Section2Props) {
  const section2Ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (section2Ref.current && onMount) {
      const updatePosition = () => {
        const rect = section2Ref.current?.getBoundingClientRect();
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
    <section
      ref={section2Ref}
      className="bg-[#2A2A2A] p-6 sm:p-8 md:p-20 flex justify-start relative my-20"
    >
      <div className="max-w-4xl w-1/2">
        <ScrollReveal direction="left" delay={0.2} duration={0.8}>
          <Typography
            variant="h3"
            color="#6f6f6f"
            weight="medium"
            align="left"
            className="mb-0"
          >
            Maxxit is a {" "}
            <span className="text-white">
              fully non-custodial DeFi trading platform
            </span>{" "}
            that enables users to deploy{" "}
            <span className="text-white">AI-powered trading agents</span> that
            execute trades autonomously on your own Safe wallet. Agents process{" "}
            <span className="text-white">
              multi-parameter market signals and execute trades 24/7
            </span>{" "}
            while you maintain complete control over your funds.
          </Typography>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default Section2;
