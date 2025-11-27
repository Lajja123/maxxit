"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Typography } from "../UI/Typography";

type WalkthroughStep = {
  code: string;
  label: string;
  badge: string;
  title: string;
  summary: string;

  accent: string;
};

const walkthroughSteps: WalkthroughStep[] = [
  {
    code: "01",
    label: "Session request captured",
    badge: "01",
    title: "Connect Your Safe Wallet",
    summary:
      "Connect your Arbitrum Safe wallet (or create one at app.safe.global). Fund it with USDC for trading. Gas fees are handled by Maxxit - no need to hold ETH.",

    accent: "#D4FF4C",
  },
  {
    code: "02",
    label: "Device fingerprint attested",
    badge: "02",
    title: "Browse the Agent Marketplace",
    summary:
      "Explore agents created by the community. Each agent uses multi-parameter analysis with its own unique strategy configuration. Review performance metrics, Impact Factor scores, and risk parameters before deploying.",
    accent: "#54D6FF",
  },
  {
    code: "03",
    label: "Multi-party key split",
    badge: "03",
    title: "Enable the Trading Module",
    summary:
      "When you deploy an agent, you'll be prompted to enable Maxxit's trading module on your Safe. This is a one-time setup that grants limited permissions for trade execution only. The module CANNOT withdraw funds or perform any other actions.",
    accent: "#59FFAF",
  },
  {
    code: "04",
    label: "Proof circuit compiled",
    badge: "04",
    title: "Fund and Activate",
    summary:
      "Once your Safe is connected and the trading module enabled, you can fund it with USDC and activate your agent. This will allow you to start trading on the Arbitrum network.",
    accent: "#FF9E4A",
  },
  {
    code: "05",
    label: "Verifier challenge issued",
    badge: "05",
    title: "Monitor via Telegram or Dashboard",
    summary:
      "Link your Telegram to receive instant trade notifications. Use the dashboard to track open positions, PnL, and manually execute trades with commands like 'Buy 10 USDC of WETH'.",
    accent: "#8A5BFF",
  },
  {
    code: "06",
    label: "Proof + session minted",
    badge: "zkPass credential",
    title: "Deliver a verifiable login artifact",
    summary:
      "The MPC crew returns a validity proof plus a sealed session token. The UI surfaces a tiny success glyph and logs the operation in the local privacy ledger so future apps can reuse the credential without re-running the flow.",

    accent: "#C7FF52",
  },
  {
    code: "07",
    label: "Scroll release",
    badge: "Hand-off",
    title: "Return control with a graceful exit",
    summary:
      "Once the final proof lands, the walkthrough relinquishes page control. Scrolling reactivates, the rest of the site becomes reachable again, and we drop a subtle prompt inviting devs to inspect the proof payload.",
    accent: "#F9F871",
  },
];

function Walkthrough() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPinned, setIsPinned] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const originalOverflowRef = useRef<string>("");
  const isTransitioningRef = useRef(false);
  const cooldownRef = useRef<number | null>(null);
  const touchStartRef = useRef<number | null>(null);

  const totalSteps = walkthroughSteps.length;

  const beginCooldown = useCallback(() => {
    isTransitioningRef.current = true;
    if (cooldownRef.current) {
      window.clearTimeout(cooldownRef.current);
    }
    cooldownRef.current = window.setTimeout(() => {
      isTransitioningRef.current = false;
    }, 650);
  }, []);

  const moveStep = useCallback(
    (direction: "forward" | "backward") => {
      if (isTransitioningRef.current) return;
      setCurrentIndex((prev) => {
        const next =
          direction === "forward"
            ? Math.min(prev + 1, totalSteps - 1)
            : Math.max(prev - 1, 0);
        if (next !== prev) {
          beginCooldown();
        }
        return next;
      });
    },
    [beginCooldown, totalSteps]
  );

  const lockScroll = isPinned && currentIndex < totalSteps - 1;

  useEffect(() => {
    originalOverflowRef.current =
      window.getComputedStyle(document.body).overflow || "auto";

    return () => {
      document.body.style.overflow = originalOverflowRef.current;
      if (cooldownRef.current) {
        window.clearTimeout(cooldownRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsPinned(entry.isIntersecting),
      { threshold: 0.7 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isPinned) {
      document.body.style.overflow = originalOverflowRef.current || "auto";
      return;
    }

    document.body.style.overflow = lockScroll
      ? "hidden"
      : originalOverflowRef.current || "auto";
  }, [isPinned, lockScroll]);

  useEffect(() => {
    if (!isPinned) return;

    const handleWheel = (event: WheelEvent) => {
      if (!lockScroll) return;
      if (Math.abs(event.deltaY) < 4) return;
      event.preventDefault();
      if (event.deltaY > 0) {
        moveStep("forward");
      } else {
        moveStep("backward");
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (!lockScroll) return;
      if (["ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        moveStep("forward");
      } else if (["ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        moveStep("backward");
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (!lockScroll) return;
      touchStartRef.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!lockScroll || touchStartRef.current === null) return;
      const currentY = event.touches[0].clientY;
      const delta = touchStartRef.current - currentY;
      if (Math.abs(delta) > 40) {
        event.preventDefault();
        if (delta > 0) {
          moveStep("forward");
        } else {
          moveStep("backward");
        }
        touchStartRef.current = currentY;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey);
    window.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isPinned, lockScroll, moveStep]);

  const activeStep = walkthroughSteps[currentIndex];
  const dotTotal = 9;
  const progress = useMemo(
    () => ((currentIndex + 1) / totalSteps) * 100,
    [currentIndex, totalSteps]
  );

  return (
    <section
      ref={containerRef}
      className="relative isolate overflow-hidden  py-24 text-white "
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(180deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#C7FF52]/10 blur-[150px]" />
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

      <div className="relative  bg-[#030304]  z-10 mx-auto flex min-h-screen  flex-col justify-center gap-16 lg:flex-row lg:items-center lg:gap-28">
        <div className="flex flex-1 flex-col gap-10 px-15">
          <div className="flex items-center gap-6">
            <div className="grid grid-cols-3 gap-1.5">
              {Array.from({ length: dotTotal }).map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index < currentIndex + 1 ? "bg-[#C7FF52]" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs uppercase tracking-[0.5em] text-white/50">
              {activeStep.badge}
            </p>
          </div>

          <div>
            <Typography
              variant="h3"
              color="white"
              weight="semibold"
              className="text-[clamp(56px,8vw,120px)] tracking-[0.2em]"
            >
              {activeStep.title}
            </Typography>
            <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.6em] text-white/40">
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <p className="mt-8 max-w-2xl font-mono text-[12px] uppercase leading-relaxed tracking-[0.25em] text-white">
              {activeStep.summary}
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-[48px] border border-white/5 bg-black/60 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-6 rounded-[36px] border border-white/5 bg-black/80" />
            <div className="relative z-10 flex flex-col items-center gap-8">
              <GlyphIcon color={activeStep.accent} />
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                {lockScroll ? "Hold" : "Release"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type GlyphIconProps = {
  color: string;
};

const GlyphIcon: React.FC<GlyphIconProps> = ({ color }) => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    role="presentation"
    aria-hidden="true"
  >
    <rect x="30" y="30" width="60" height="60" rx="12" fill={color} />
    <rect x="110" y="30" width="60" height="60" rx="12" fill={color} />
    <rect x="30" y="110" width="60" height="60" rx="12" fill={color} />
    <rect x="110" y="110" width="60" height="60" rx="12" fill={color} />
    <rect x="85" y="85" width="30" height="30" rx="8" fill="black" />
    <rect x="45" y="95" width="110" height="10" rx="5" fill={color} />
    <rect x="95" y="45" width="10" height="110" rx="5" fill={color} />
  </svg>
);

export default Walkthrough;
