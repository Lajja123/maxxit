"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "lenis";
import Button from "../UI/Button";
import Typography from "../UI/Typography";
import heroClip from "@/assests/home/hero-clip.png";

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

type AnimatedArcProps = {
  targetRef: React.RefObject<HTMLElement | null>;
};

const AnimatedArc: React.FC<AnimatedArcProps> = ({ targetRef }) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [pathLength, setPathLength] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !targetRef.current) return;
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.2,
    });

    const handleScroll = () => {
      if (!targetRef.current) return;
      const rect = targetRef.current.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const totalDistance = rect.height + viewport * 0.8;
      const travelled = viewport * 0.4 - rect.top;
      setProgress(clamp(travelled / totalDistance));
    };

    lenis.on("scroll", handleScroll);
    handleScroll();

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.off("scroll", handleScroll);
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, [targetRef]);

  const dashArray = Math.max(pathLength, 1);

  return (
    <div className="pointer-events-none absolute left-1/2 top-8 w-[170%] max-w-none -translate-x-1/2">
      <svg
        viewBox="0 0 1000 620"
        className="w-full text-transparent"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="hero-arc"
            x1="0"
            y1="0"
            x2="1000"
            y2="620"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3F57FF" />
            <stop offset="0.5" stopColor="#4154FF" />
            <stop offset="1" stopColor="#2B7CFF" />
          </linearGradient>
          <marker
            id="hero-arrow"
            markerWidth="18"
            markerHeight="18"
            refX="12"
            refY="9"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path d="M0,0 L18,9 L0,18 Z" fill="#2B7CFF" />
          </marker>
        </defs>
        <path
          ref={pathRef}
          d="M0 160C180 40 360 60 560 150C720 220 760 320 690 400C640 460 560 520 470 560"
          stroke="url(#hero-arc)"
          strokeWidth="20"
          strokeLinecap="round"
          markerEnd="url(#hero-arrow)"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashArray * (1 - progress),
          }}
        />
      </svg>
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  return (
    <section ref={heroRef} className="relative overflow-hidden  text-[#050714]">
      {/* <AnimatedArc targetRef={heroRef} /> */}

      <div className="relative z-10 mx-auto flex w-full flex-col gap-10 px-6 pb-28 pt-28 sm:px-10 lg:px-0">
        <Typography
          variant="h1"
          className="text-center  font-medium leading-[0.92] text-[#050714]"
        >
          <span className="text-primary relative left-80">
            Insights that Lead with
          </span>
          <br />
          <span className="text-primary relative left-50">
            Proven Intelligence
          </span>
        </Typography>
        <div className="flex flex-raw gap-7 justify-around ">
          <div className="w-[30%]">
            <Image
              src={heroClip}
              alt="Abstract iridescent ribbons"
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-7">
            <Typography
              variant="h6"
              className="text-center text-base font-medium leading-relaxed text-[#050714] max-w-2xl mx-auto"
            >
              Say goodbye to guesswork. Our AI analyzes Twitter trends and
              delivers precise trading signals—helping you stay ahead with
              real-time crypto insights.
              <br />
              <br />
              Say goodbye to guesswork. Our AI analyzes Twitter trends and
              delivers precise trading signals—helping you stay ahead with
              real-time crypto insights.
            </Typography>

            <div className="flex gap-4">
              <Button
                variant="black"
                paddingX="px-7"
                paddingY="py-3"
                className="uppercase border border-black text-white"
              >
                Launch App
              </Button>
              <Button
                variant="white"
                paddingX="px-7"
                paddingY="py-3"
                className="uppercase border border-black/25 bg-transparent text-black hover:bg-black hover:text-white"
              >
                About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
