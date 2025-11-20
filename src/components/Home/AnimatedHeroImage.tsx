"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import heroImage from "@/assests/home/hero-clip.png";
import Lenis from "lenis";

interface AnimatedHeroImageProps {
  heroStart: number;
  heroEnd: number;
  section2Start: number;
  section2End: number;
}

export function AnimatedHeroImage({
  heroStart,
  heroEnd,
  section2Start,
  section2End,
}: AnimatedHeroImageProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const animationParams = useMemo(() => {
    const windowHeight = window.innerHeight;
    const animationStart = 0;
    const animationEnd = section2Start + windowHeight * 0.5;
    return { animationStart, animationEnd, windowHeight };
  }, [section2Start]);

  useEffect(() => {
    interface WindowWithLenis extends Window {
      __lenis?: Lenis;
    }
    const getLenis = () => {
      return (window as WindowWithLenis).__lenis;
    };

    const updateScroll = ({ scroll }: { scroll: number; limit: number }) => {
      const currentScrollY = scroll;

      setScrollY(currentScrollY);

      // Calculate progress from beginning of scroll
      const { animationStart, animationEnd } = animationParams;

      let progress = 0;
      if (animationEnd > animationStart) {
        const totalDistance = animationEnd - animationStart;
        const currentDistance = currentScrollY - animationStart;
        progress = Math.min(1, Math.max(0, currentDistance / totalDistance));
      } else if (currentScrollY > animationEnd) {
        progress = 1;
      }

      setScrollProgress(progress);
    };

    //  get Lenis instance
    let lenis = getLenis();

    if (!lenis) {
      // Wait Lenis to initialize
      const timeout = setTimeout(() => {
        lenis = getLenis();
        if (lenis) {
          lenisRef.current = lenis;
          lenis.on("scroll", updateScroll);
        }
      }, 100);

      return () => {
        clearTimeout(timeout);
        if (lenisRef.current) {
          lenisRef.current.off("scroll", updateScroll);
        }
      };
    }

    lenisRef.current = lenis;
    lenis.on("scroll", updateScroll);

    // Initial call
    updateScroll({ scroll: window.scrollY, limit: document.body.scrollHeight });

    return () => {
      const lenis = lenisRef.current;
      if (lenis) {
        lenis.off("scroll", updateScroll);
      }
    };
  }, [animationParams]);

  // Calculate image position and style
  const getImageStyle = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (scrollProgress === 0) {
      // Initial position - below the buttons in Hero section
      // Calculate where the buttons end and position image in the placeholder area below
      // The buttons are in the Hero section, and there's a 500px placeholder below them
      // Position image in the center of that placeholder area (lower part of Hero)
      const heroBottom = heroEnd;
      const heroTop = heroStart;
      const heroHeight = heroEnd - heroStart;

      // Estimate buttons area: roughly 60-70% of hero section is content (heading, subtitle, buttons)
      // Image should be in the remaining 30-40% (the placeholder area)
      const buttonsAreaEnd = heroTop + heroHeight * 0.7; // Roughly where buttons end
      const imageAreaStart = buttonsAreaEnd; // Image starts after buttons
      const imageAreaCenter =
        imageAreaStart + (heroBottom - imageAreaStart) / 2;

      // Convert to viewport coordinates
      const imageCenterYViewport = imageAreaCenter - scrollY;

      // Position image in the lower part of Hero section, below buttons
      // Keep it within viewport bounds
      const topPosition = Math.max(
        windowHeight * 0.6, // At least 60% down the viewport (below buttons)
        Math.min(windowHeight * 0.9, imageCenterYViewport) // But not too low
      );

      return {
        position: "fixed" as const,
        left: "50%",
        top: `${topPosition}px`,
        transform: "translate(-50%, -50%) scale(1.0) rotate(0deg)", // First view - full scale, no rotation
        opacity: 1,
        zIndex: 0, // Lower z-index so buttons and content stay on top
        width: "500px",
        height: "500px",
        willChange: "transform",
      };
    } else if (scrollProgress >= 1) {
      // Final position - fixed at bottom of Section2, on right side
      // Position it at the bottom of Section2, not in front of text
      const section2Bottom = section2End;
      const section2BottomViewport = section2Bottom - scrollY;

      return {
        position: "fixed" as const,
        right: "5%", // Closer to edge for better visibility
        top: `${Math.max(
          windowHeight * 0.1,
          Math.min(windowHeight * 0.9, section2BottomViewport - 250) // 250px above bottom (half of image height)
        )}px`,
        transform: "translateY(-50%) scale(1.0) rotate(0deg)", // Final position - scale 1.0, rotation back to 0deg
        opacity: 1,
        zIndex: 15, // Higher z-index to ensure it's in front
        width: "500px",
        height: "500px",
        pointerEvents: "none" as const,
        willChange: "transform",
      };
    } else {
      // Transitioning - smooth interpolation between positions
      // Start position (below buttons in Hero section)
      const startX = windowWidth / 2;
      const heroBottom = heroEnd;
      const heroTop = heroStart;
      const heroHeight = heroEnd - heroStart;
      const buttonsAreaEnd = heroTop + heroHeight * 0.7;
      const imageAreaStart = buttonsAreaEnd;
      const imageAreaCenter =
        imageAreaStart + (heroBottom - imageAreaStart) / 2;
      const imageCenterYViewport = imageAreaCenter - scrollY;
      const startY = Math.max(
        windowHeight * 0.6, // Start below buttons area
        Math.min(windowHeight * 0.9, imageCenterYViewport)
      );

      // End position (right side of section2, at bottom)
      const endX = windowWidth * 0.95; // 5% from right edge
      const section2Bottom = section2End;
      const section2BottomViewport = section2Bottom - scrollY;
      const endY = Math.max(
        windowHeight * 0.1,
        Math.min(windowHeight * 0.9, section2BottomViewport - 0) // 250px above bottom (half of image height)
      );

      // Ultra-smooth easing function for buttery movement
      const easeOutQuart = (t: number) => {
        return 1 - Math.pow(1 - t, 4);
      };
      const easedProgress = easeOutQuart(scrollProgress);

      // Create a curved path using Bezier curve
      // This creates an arc motion instead of straight line
      const bezierPoint = (
        t: number,
        p0: number,
        p1: number,
        p2: number,
        p3: number
      ) => {
        const u = 1 - t;
        const tt = t * t;
        const uu = u * u;
        const uuu = uu * u;
        const ttt = tt * t;
        return uuu * p0 + 3 * uu * t * p1 + 3 * u * tt * p2 + ttt * p3;
      };

      // Control points for curved path
      // Start point (p0): center, below buttons
      // Control point 1 (p1): slightly right and up
      // Control point 2 (p2): more right, slightly up
      // End point (p3): right side, Section2 center
      const controlPoint1X = startX + (endX - startX) * 0.1; // 30% along X
      const controlPoint1Y = startY - windowHeight * 0.15; // Move up a bit
      const controlPoint2X = startX + (endX - startX) * 0.1; // 70% along X
      const controlPoint2Y = endY - windowHeight * 0.2; // Slightly above end

      // Calculate curved path using Bezier curve
      const currentX = bezierPoint(
        easedProgress,
        startX,
        controlPoint1X,
        controlPoint2X,
        endX
      );
      const currentY = bezierPoint(
        easedProgress,
        startY,
        controlPoint1Y,
        controlPoint2Y,
        endY
      );

      // Scale and rotation changes at different stages (first, second, third view)
      // First view (0-0.33): Start at normal scale, no rotation
      // Second view (0.33-0.66): Scale down, rotate
      // Third view (0.66-1): Scale up to final, rotate back
      let scale: number;
      let rotation: number;

      if (scrollProgress < 0.33) {
        // First view: Start at full scale, no rotation
        const firstViewProgress = scrollProgress / 0.33;
        scale = 1.0 - firstViewProgress * 0.15; // Scale from 1.0 to 0.85
        rotation = firstViewProgress * 15; // Rotate from 0deg to 15deg
      } else if (scrollProgress < 0.66) {
        // Second view: Scale down (smallest), continue rotation
        const secondViewProgress = (scrollProgress - 0.33) / 0.33;
        scale = 0.85 - secondViewProgress * 0.1; // Scale from 0.85 to 0.75
        rotation = 15 + secondViewProgress * 25; // Rotate from 15deg to 40deg
      } else {
        // Third view: Scale up to final, rotate back to 0deg (reverse from 40deg)
        const thirdViewProgress = (scrollProgress - 0.66) / 0.34;
        scale = 0.75 + thirdViewProgress * 0.25; // Scale from 0.75 to 1.0
        rotation = 40 - thirdViewProgress * 40; // Rotate from 40deg back to 0deg
      }

      return {
        position: "fixed" as const,
        left: `${currentX}px`,
        top: `${currentY}px`,
        transform: `translate3d(-50%, -50%, 0) scale(${scale}) rotate(${rotation}deg)`, // Use translate3d for GPU acceleration with rotation
        opacity: 1,
        zIndex: 15, // Higher z-index during transition too
        width: "500px",
        height: "500px",
        transition: "none", // No CSS transition, we handle it with JavaScript
        pointerEvents: "none" as const,
        willChange: "transform", // Hint browser to optimize
      };
    }
  };

  return (
    <div ref={imageRef} style={getImageStyle()} className="pointer-events-none">
      <Image
        src={heroImage}
        alt="Hero Image"
        quality={100}
        width={500}
        height={500}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}
