"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealTextProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

export function ScrollRevealText({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
  threshold = 0.1,
  stagger = false,
  staggerDelay = 0.1,
}: ScrollRevealTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if element is already in viewport on mount (for above-fold content)
    const checkInitialVisibility = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isInViewport =
          rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        if (isInViewport) {
          setIsVisible(true);
          return true;
        }
      }
      return false;
    };

    // Small delay to ensure layout is settled
    let observer: IntersectionObserver | null = null;
    const timeoutId = setTimeout(() => {
      if (checkInitialVisibility()) {
        return; // Already visible, no need for observer
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              
              // If stagger is enabled, animate child elements
              if (stagger && entry.target) {
                const staggerChildren = entry.target.querySelectorAll("[data-stagger-item]");
                staggerChildren.forEach((child, index) => {
                  (child as HTMLElement).style.opacity = "1";
                  (child as HTMLElement).style.transform = "translateY(0)";
                  (child as HTMLElement).style.transition = `opacity ${duration}s ease-out ${delay + index * staggerDelay}s, transform ${duration}s ease-out ${delay + index * staggerDelay}s`;
                });
              }
            }
          });
        },
        {
          threshold,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      const currentElement = elementRef.current;
      if (currentElement) {
        observer.observe(currentElement);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer && elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, stagger, delay, duration, staggerDelay]);

  const getTransform = () => {
    return isVisible ? "translateY(0)" : "translateY(30px)";
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

// Helper component for staggered text animation
export function StaggerText({ children, className = "" }: { children: ReactNode; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <span
      ref={elementRef}
      data-stagger-item
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        display: "inline-block",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {children}
    </span>
  );
}

