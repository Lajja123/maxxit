"use client";

import { useEffect, useRef, useCallback } from "react";
import type { Dot, MousePosition, DotGridConfig } from "@/types/home.types";

export function useDotGrid(config: DotGridConfig) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef<MousePosition>({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);

  const { dotSpacing, dotRadius, dotColor, mouseRadius, repelStrength, easeFactor } = config;

  const initDots = useCallback(
    (width: number, height: number) => {
      dotsRef.current = [];
      const cols = Math.ceil(width / dotSpacing) + 1;
      const rows = Math.ceil(height / dotSpacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * dotSpacing;
          const y = j * dotSpacing;
          dotsRef.current.push({
            originX: x,
            originY: y,
            x: x,
            y: y,
          });
        }
      }
    },
    [dotSpacing]
  );

  const updateDots = useCallback(() => {
    dotsRef.current.forEach((dot) => {
      const dx = mouseRef.current.x - dot.originX;
      const dy = mouseRef.current.y - dot.originY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouseRadius) {
        const force = (mouseRadius - distance) / mouseRadius;
        const angle = Math.atan2(dy, dx);
        const moveX = Math.cos(angle) * force * repelStrength;
        const moveY = Math.sin(angle) * force * repelStrength;

        dot.x = dot.originX - moveX;
        dot.y = dot.originY - moveY;
      } else {
        dot.x += (dot.originX - dot.x) * easeFactor;
        dot.y += (dot.originY - dot.y) * easeFactor;
      }
    });
  }, [mouseRadius, repelStrength, easeFactor]);

  const drawDots = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      dotsRef.current.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      });
    },
    [dotRadius, dotColor]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
      initDots(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY + window.scrollY,
      };
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateDots();
      drawDots(ctx);

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [initDots, updateDots, drawDots]);

  return { canvasRef };
}

