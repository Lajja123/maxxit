"use client";

import React, { JSX, useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedTextProps {
  children: string;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
  animation?: "blur" | "word" | "char";
  delay?: number;
  staggerDelay?: number;
  threshold?: number;
}

// Word by word blur reveal
export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  as: Component = "p",
  className = "",
  animation = "blur",
  delay = 0,
  staggerDelay = 0.05,
  threshold = 0.2,
}) => {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>({ threshold });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted]);

  if (animation === "word") {
    const words = children.split(" ");
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        <Component className="flex flex-wrap">
          {words.map((word, index) => (
            <span
              key={index}
              className={`inline-block mr-[0.3em] overflow-hidden`}
            >
              <span
                className={`inline-block transition-all duration-500 ${
                  hasStarted
                    ? "animate-word-reveal"
                    : "opacity-0 blur-sm translate-y-full"
                }`}
                style={{ animationDelay: `${delay + index * staggerDelay}s` }}
              >
                {word}
              </span>
            </span>
          ))}
        </Component>
      </div>
    );
  }

  if (animation === "char") {
    const chars = children.split("");
    return (
      <div ref={ref} className={`perspective-1000 ${className}`}>
        <Component className="inline-flex flex-wrap">
          {chars.map((char, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-300 ${
                hasStarted
                  ? "animate-char-reveal"
                  : "opacity-0 blur-sm"
              }`}
              style={{ 
                animationDelay: `${delay + index * 0.03}s`,
                whiteSpace: char === " " ? "pre" : "normal"
              }}
            >
              {char}
            </span>
          ))}
        </Component>
      </div>
    );
  }

  // Default blur animation
  return (
    <div ref={ref}>
      <Component
        className={`transition-all duration-700 ${className} ${
          hasStarted
            ? "animate-blur-reveal"
            : "opacity-0 blur-lg translate-y-5"
        }`}
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </Component>
    </div>
  );
};

// Scroll-triggered container component
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: "up" | "down" | "left" | "right" | "scale" | "blur";
  delay?: number;
  threshold?: number;
  duration?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  animation = "up",
  delay = 0,
  threshold = 0.1,
  duration = 0.8,
}) => {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>({ threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const animationClasses = {
    up: hasAnimated ? "animate-scroll-slide-up" : "opacity-0 translate-y-16",
    down: hasAnimated ? "animate-scroll-slide-down" : "opacity-0 -translate-y-16",
    left: hasAnimated ? "animate-blur-reveal-left" : "opacity-0 -translate-x-8 blur-sm",
    right: hasAnimated ? "animate-blur-reveal-right" : "opacity-0 translate-x-8 blur-sm",
    scale: hasAnimated ? "animate-blur-reveal-scale" : "opacity-0 scale-90 blur-sm",
    blur: hasAnimated ? "animate-blur-reveal" : "opacity-0 blur-lg translate-y-5",
  };

  return (
    <div
      ref={ref}
      className={`${animationClasses[animation]} ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
};

// Staggered children animation container
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: "up" | "blur" | "scale";
  threshold?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = "",
  staggerDelay = 0.1,
  animation = "up",
  threshold = 0.1,
}) => {
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>({ threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const animationClass = {
          up: hasAnimated ? "animate-scroll-slide-up" : "opacity-0 translate-y-16",
          blur: hasAnimated ? "animate-blur-reveal" : "opacity-0 blur-lg translate-y-5",
          scale: hasAnimated ? "animate-blur-reveal-scale" : "opacity-0 scale-90 blur-sm",
        };

        return (
          <div
            className={animationClass[animation]}
            style={{ animationDelay: `${index * staggerDelay}s` }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedText;

