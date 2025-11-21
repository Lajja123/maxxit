"use client";

import React from "react";
import Button from "../UI/Button";
import { Typography } from "../UI/Typography";
import Image from "next/image";
import hero from "@/assests/home/hero.webp";

type GradientFrameProps = {
  children: React.ReactNode;
};

const GradientFrame: React.FC<GradientFrameProps> = ({ children }) => (
  <span className="relative inline-block rounded-[32px] px-8 py-6">
    <span className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/15" />
    <span className="pointer-events-none absolute left-4 top-4 h-px w-12 bg-linear-to-r from-[#54D6FF] to-transparent" />
    <span className="pointer-events-none absolute left-4 top-4 h-12 w-px bg-linear-to-b from-[#54D6FF] to-transparent" />
    <span className="pointer-events-none absolute right-4 top-4 h-px w-12 bg-linear-to-l from-[#8A5BFF] to-transparent" />
    <span className="pointer-events-none absolute right-4 top-4 h-12 w-px bg-linear-to-b from-[#8A5BFF] to-transparent" />
    <span className="pointer-events-none absolute left-4 bottom-4 h-px w-12 bg-linear-to-r from-[#FF9E4A] to-transparent" />
    <span className="pointer-events-none absolute left-4 bottom-4 h-12 w-px bg-linear-to-t from-[#FF9E4A] to-transparent" />
    <span className="pointer-events-none absolute right-4 bottom-4 h-px w-12 bg-linear-to-l from-[#59FFAF] to-transparent" />
    <span className="pointer-events-none absolute right-4 bottom-4 h-12 w-px bg-linear-to-t from-[#59FFAF] to-transparent" />
    <span className="relative z-10 block text-left leading-tight">
      {children}
    </span>
  </span>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-transparent px-4  text-white sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 ">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
        <div className="absolute left-16 top-32 h-56 w-56 rounded-[32px] border border-white/5 bg-white/5 blur-3xl" />
        <div className="absolute right-24 bottom-24 h-72 w-72 rounded-full bg-[#59FFAF]/10 blur-[140px]" />
      </div>
      <div className="relative z-10 mx-auto flex h-screen max-w-9xl flex-col gap-16 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6 ">
          <Typography
            variant="h1"
            color="white"
            weight="semibold"
            className="text-4xl tracking-tight sm:text-5xl lg:text-6xl"
          >
            Insights that Lead with <br />
            <span className="mt-6 inline-block bg-[#09090e]">
              <GradientFrame>
                <span className="flex flex-col gap-2 ">
                  <span className="relative inline-flex items-center gap-4">
                    <span className="h-px w-10 bg-linear-to-r from-[#54D6FF] to-transparent" />
                    Proven
                    <span className="h-px w-50 bg-linear-to-l from-[#8A5BFF] to-transparent" />
                  </span>
                  <span className="relative inline-flex items-center gap-4">
                    <span className="h-px w-50 bg-linear-to-r from-[#FF9E4A] to-transparent" />
                    Intelligence
                    <span className="h-px w-10 bg-linear-to-l from-[#59FFAF] to-transparent" />
                  </span>
                </span>
              </GradientFrame>
            </span>
          </Typography>

          <Typography
            variant="h6"
            color="white"
            weight="normal"
            className="mx-auto max-w-xl text-base text-white/80 sm:mx-0 sm:text-lg"
          >
            Say goodbye to guesswork. Our AI analyzes Twitter trends and
            delivers precise trading signals—helping you stay ahead with
            real-time crypto insights.
          </Typography>

          <div className="flex flex-col items-stretch gap-4 py-3 sm:flex-row sm:items-center">
            <Button
              variant="black"
              paddingX="px-8"
              paddingY="py-4"
              className="w-full border border-white/20 text-white hover:border-white/40 sm:w-auto"
            >
              Launch App
            </Button>
            <Button
              variant="black"
              paddingX="px-8"
              paddingY="py-4"
              className="w-full border border-white/20 text-white hover:border-white/40 sm:w-auto"
            >
              Share Your Signals
            </Button>
          </div>
        </div>

        <div className="relative mt-12 flex w-full flex-1 max-w-xl self-center sm:mt-16 lg:mt-0 lg:max-w-none">
          <Image
            src={hero}
            alt="Hero"
            priority
            className="h-auto w-full object-contain"
            sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 45vw, (min-width: 640px) 70vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
