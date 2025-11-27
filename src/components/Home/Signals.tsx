"use client";

import React, { useEffect, useMemo, useRef } from "react";

import { Typography } from "../UI/Typography";

type SignalCard = {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  avatarBg: string;
  coin: string;
  tokenId: string;
  date: string;
  profit: string;
  status: "Profit" | "Loss";
};

const signalCards: SignalCard[] = [
  {
    id: "thecryptokazi",
    name: "TheCryptoKazi",
    handle: "@TheCryptoKazi",
    avatar: "KAZI",
    avatarBg: "#2F2854",
    coin: "TIBBIR",
    tokenId: "ribbita-by-virtuals",
    date: "01-05-2025",
    profit: "205.52%",
    status: "Profit",
  },
  {
    id: "riddlerdefi",
    name: "RiddlerDeFi",
    handle: "@RiddlerDeFi",
    avatar: "🕵️",
    avatarBg: "#111826",
    coin: "AVNT",
    tokenId: "avantis",
    date: "11-09-2025",
    profit: "231.14%",
    status: "Profit",
  },
  {
    id: "dippyeth",
    name: "dippy_eth",
    handle: "@dippy_eth",
    avatar: "🐧",
    avatarBg: "#1C2436",
    coin: "NPC",
    tokenId: "npc",
    date: "11-04-2025",
    profit: "532.10%",
    status: "Profit",
  },
  {
    id: "aixbt",
    name: "aixbt_agent",
    handle: "@aixbt_agent",
    avatar: "🧬",
    avatarBg: "#291E3F",
    coin: "MONK",
    tokenId: "monk",
    date: "02-05-2025",
    profit: "1,487.32%",
    status: "Profit",
  },
  {
    id: "cryptoslate",
    name: "CryptoSlate",
    handle: "@CryptoSlate",
    avatar: "C",
    avatarBg: "#0D111C",
    coin: "MYX",
    tokenId: "myx-finance",
    date: "26-08-2025",
    profit: "184.90%",
    status: "Profit",
  },
];

function Signals() {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const scrollTimeoutRef = useRef<number | null>(null);

  const extendedSignals = useMemo(() => [...signalCards, ...signalCards], []);

  useEffect(() => {
    const node = marqueeRef.current;
    if (!node) return;

    let animationFrame: number;
    const speed = 0.5;

    const animate = () => {
      if (!node) return;
      node.scrollLeft += speed;
      const maxScroll = node.scrollWidth / 2;
      if (node.scrollLeft >= maxScroll) {
        node.scrollLeft = 0;
      }
      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const handleArrowScroll = (direction: "prev" | "next") => {
    const node = marqueeRef.current;
    if (!node) return;

    const distance = direction === "next" ? 320 : -320;
    node.scrollBy({ left: distance, behavior: "smooth" });

    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = window.setTimeout(() => {
      if (!node) return;
      if (node.scrollLeft >= node.scrollWidth / 2) {
        node.scrollLeft = 0;
      } else if (node.scrollLeft < 0) {
        node.scrollLeft = node.scrollWidth / 2 + distance;
      }
    }, 400);
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden px-4 py-20 text-white sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "140px 140px",
          }}
        />
      </div>
      <div className="relative z-10 mb-12 flex flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#050714]/15 bg-white/70 px-6 py-2 text-[10px] uppercase tracking-[0.4em] text-[#050714]/60">
          <span className="h-1.5 w-1.5 rounded-full bg-[#050714]" />
          Signal Stack
        </span>
        <Typography variant="h2" color="#050714" weight="bold">
          UseCase
        </Typography>
        <p className="max-w-3xl text-sm text-[#050714]/65 md:text-base">
          Move from raw alpha to automation-ready signals with the same crisp
          styling as our hero—structured, trustworthy, and easy to scan.
        </p>
      </div>

      <div className="relative z-10 space-y-12">
        <div className="grid gap-10 rounded-[36px] border border-white/10 bg-white/70 p-8 shadow-[0_25px_100px_rgba(0,0,0,0.6)] lg:grid-cols-[minmax(0,1fr)_320px]">
          <div ref={marqueeRef} className="flex gap-6 overflow-hidden pb-4">
            {extendedSignals.map((signal, index) => (
              <SignalCardItem signal={signal} key={`${signal.id}-${index}`} />
            ))}
          </div>

          <div className="rounded-[28px] border border-white/10 bg-black p-6 text-black">
            <p className="text-xs uppercase tracking-[0.5em] text-black/60">
              Signals
            </p>
            <Typography
              variant="h4"
              color="white"
              weight="bold"
              className="mt-4 font-['Space_Grotesk',monospace] uppercase tracking-[0.3em]"
            >
              We work with the best
            </Typography>
            <p className="mt-4 text-sm text-white/80">
              The most accurate Twitter operators surface here. Cards loop
              forever, keeping the carousel alive without manual scrolling.
            </p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-8">
                <button
                  type="button"
                  onClick={() => handleArrowScroll("prev")}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/60 hover:text-white"
                  aria-label="Previous signals"
                >
                  &lsaquo;
                </button>
                <button
                  type="button"
                  onClick={() => handleArrowScroll("next")}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/60 hover:text-white"
                  aria-label="Next signals"
                >
                  &rsaquo;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type SignalCardItemProps = {
  signal: SignalCard;
};

const SignalCardItem: React.FC<SignalCardItemProps> = ({ signal }) => {
  return (
    <div className="min-w-[280px] max-w-[320px] flex-none rounded-[32px] border border-white/5 bg-[#080a11] p-6 text-white ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full text-xs uppercase tracking-[0.4em]"
            style={{ backgroundColor: signal.avatarBg }}
          >
            {signal.avatar}
          </span>
          <div>
            <p className="text-sm font-semibold">{signal.name}</p>
            <p className="text-xs text-white/50">{signal.handle}</p>
          </div>
        </div>
        <span className="text-white/40">&times;</span>
      </div>

      <div className="mt-6 space-y-2 text-sm">
        <p className="text-white/60">
          Coin: <span className="text-white">{signal.coin}</span>
        </p>
        <p className="text-white/60">
          Token ID:{" "}
          <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs">
            {signal.tokenId}
          </span>
        </p>
        <p className="text-white/60">
          Signal Date: <span className="text-white">{signal.date}</span>
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
        <div className="text-right">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-400">
            {signal.status}
          </p>
          <p className="text-3xl font-bold text-emerald-300">{signal.profit}</p>
        </div>
        <span className="text-sm text-emerald-300">↗</span>
      </div>
    </div>
  );
};

export default Signals;
