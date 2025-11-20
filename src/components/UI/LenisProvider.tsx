"use client";

import { useEffect, createContext, useContext } from "react";
import Lenis from "lenis";

const LenisContext = createContext<Lenis | null>(null);

export function useLenis() {
  return useContext(LenisContext);
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Store Lenis instance in window for components to use
    interface WindowWithLenis extends Window {
      __lenis?: Lenis;
    }
    (window as WindowWithLenis).__lenis = lenis;

    return () => {
      lenis.destroy();
      delete (window as WindowWithLenis).__lenis;
    };
  }, []);

  return <>{children}</>;
}
