"use client";

import React from "react";
import Button from "@/components/UI/Button";
import Typography from "@/theme/Typography";

// Crypto icon component with 3D tilt effect
const CryptoIcon = ({
  icon,
  position,
  delay,
  rotate,
}: {
  icon: React.ReactNode;
  position: string;
  delay: string;
  rotate?: string;
}) => (
  <div
    className={`absolute ${position} animate-float z-10`}
    style={{ animationDelay: delay }}
  >
    <div 
      className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-white border border-black/5 flex items-center justify-center shadow-xl shadow-black/5 ${rotate || ''}`}
      style={{ transform: rotate }}
    >
      {icon}
    </div>
  </div>
);

// Bitcoin Icon
const BitcoinIcon = () => (
  <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#F7931A]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm1.31-15.47c1.16.39 2.02 1.1 1.82 2.51-.14.98-.68 1.45-1.36 1.65.98.46 1.53 1.22 1.22 2.64-.39 1.78-1.71 2.17-3.55 2.17v1.73h-1.05v-1.7h-.84v1.7H8.5v-1.73H6.77v-1.1s.77.02.76 0c.29 0 .38-.2.38-.32v-4.33c0-.17-.08-.36-.38-.36.01-.02-.76 0-.76 0V9.31h1.72V7.58h1.05v1.7h.84v-1.7h1.05v1.76c1.36.12 2.44.55 2.78 1.69zm-2.43 5.27c1.06 0 2.31-.11 2.31-1.32 0-1.15-1.12-1.33-2.31-1.33h-.72v2.65h.72zm-.72-5.35v2.37h.65c.97 0 2.07-.1 2.07-1.17 0-1.13-1.03-1.2-2.07-1.2h-.65z"/>
  </svg>
);

// Ethereum Icon
const EthereumIcon = () => (
  <svg className="w-7 h-7 lg:w-8 lg:h-8 text-[#627EEA]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L4.5 12.2 12 16.5l7.5-4.3L12 0zM4.5 13.5L12 24l7.5-10.5L12 17.8 4.5 13.5z"/>
  </svg>
);

// Solana Icon
const SolanaIcon = () => (
  <svg className="w-7 h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
    <path d="M4.5 18.5L7.5 15.5H19.5L16.5 18.5H4.5Z" fill="url(#solana1)"/>
    <path d="M4.5 5.5L7.5 8.5H19.5L16.5 5.5H4.5Z" fill="url(#solana2)"/>
    <path d="M4.5 12L7.5 9H19.5L16.5 12H4.5Z" fill="url(#solana3)"/>
    <defs>
      <linearGradient id="solana1" x1="4.5" y1="17" x2="19.5" y2="17" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3"/>
        <stop offset="1" stopColor="#DC1FFF"/>
      </linearGradient>
      <linearGradient id="solana2" x1="4.5" y1="7" x2="19.5" y2="7" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3"/>
        <stop offset="1" stopColor="#DC1FFF"/>
      </linearGradient>
      <linearGradient id="solana3" x1="4.5" y1="10.5" x2="19.5" y2="10.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3"/>
        <stop offset="1" stopColor="#DC1FFF"/>
      </linearGradient>
    </defs>
  </svg>
);

// Arbitrum Icon
const ArbitrumIcon = () => (
  <svg className="w-7 h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" fill="#2D374B"/>
    <path d="M12.9 14.4L14.7 11L16.2 13.6L13.8 17.6L12.9 14.4Z" fill="#28A0F0"/>
    <path d="M10.2 17.6L7.8 13.6L12 6.4L14.1 10.2L10.2 17.6Z" fill="white"/>
  </svg>
);

// X/Twitter Icon
const XIcon = () => (
  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-black" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// AI/Signal Icon
const AIIcon = () => (
  <svg className="w-6 h-6 lg:w-7 lg:h-7 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
  </svg>
);

// Animated Title
const AnimatedTitle = () => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <Typography variant="h1" weight="bold" align="center">
        <span className="block">
          {["Insights", "that", "Lead"].map((word, index) => (
            <span
              key={word}
              className="inline-block animate-blur-reveal opacity-0"
              style={{ animationDelay: `${index * 0.08}s`, animationFillMode: "forwards" }}
            >
              {word}&nbsp;
            </span>
          ))}
        </span>
        <span className="block mt-2">
          <span
            className="inline-block animate-blur-reveal opacity-0"
            style={{ animationDelay: "0.24s", animationFillMode: "forwards" }}
          >
            with&nbsp;
          </span>
          <span
            className="inline-block animate-blur-reveal opacity-0"
            style={{ animationDelay: "0.32s", animationFillMode: "forwards" }}
          >
            <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent italic">
              Proven
            </span>
          </span>
          &nbsp;
          <span
            className="inline-block animate-blur-reveal opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Intelligence
          </span>
        </span>
      </Typography>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden ">
      {/* Subtle gradient background */}
      
      {/* Floating Crypto Icons */}
      <div className="hidden md:block">
        {/* Top left - Ethereum */}
        <CryptoIcon
          icon={<EthereumIcon />}
          position="top-[18%] left-[12%]"
          delay="0s"
          rotate="rotate-[-8deg]"
        />
        
        {/* Top right - Bitcoin */}
        <CryptoIcon
          icon={<BitcoinIcon />}
          position="top-[22%] right-[14%]"
          delay="0.5s"
          rotate="rotate-[12deg]"
        />
        
        {/* Left middle - Arbitrum */}
        <CryptoIcon
          icon={<ArbitrumIcon />}
          position="top-[45%] left-[8%]"
          delay="0.3s"
          rotate="rotate-[-5deg]"
        />
        
        {/* Right middle - X/Twitter */}
        <CryptoIcon
          icon={<XIcon />}
          position="top-[50%] right-[10%]"
          delay="0.7s"
          rotate="rotate-[8deg]"
        />
        
        {/* Bottom left - Solana */}
        <CryptoIcon
          icon={<SolanaIcon />}
          position="bottom-[25%] left-[15%]"
          delay="0.2s"
          rotate="rotate-[6deg]"
        />
        
        {/* Bottom right - AI Lightning */}
        <CryptoIcon
          icon={<AIIcon />}
          position="bottom-[28%] right-[12%]"
          delay="0.6s"
          rotate="rotate-[-10deg]"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center">
        <div className="text-center py-20">
          
          {/* Title */}
          <AnimatedTitle />

          {/* Subtitle */}
          <div 
            className="mt-6 lg:mt-8 max-w-2xl mx-auto animate-blur-reveal opacity-0"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <Typography variant="subtitle" align="center" className="text-black/60">
              Say goodbye to guesswork. Our AI analyzes Twitter trends and delivers
            </Typography>
            <Typography variant="subtitle" align="center" className="text-black/60">
              precise trading signals—helping you{" "}
              <span className="italic text-black/80">stay ahead with real-time crypto insights</span>.
            </Typography>
          </div>

          {/* CTA Buttons */}
          <div
            className="mt-10 lg:mt-12 flex flex-wrap items-center justify-center gap-4 animate-blur-reveal opacity-0"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            <Button variant="black">Launch App</Button>
            <Button variant="white">Share Your Signals</Button>
          </div>

         
        </div>
      </div>
    </section>
  );
}
