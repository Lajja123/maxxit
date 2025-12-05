"use client";

import React from "react";
import Typography from "@/theme/Typography";
import { useHoverState } from "@/hooks/useHoverState";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ScrollReveal } from "@/components/UI/AnimatedText";
import {
  FEATURES,
  WHY_CHOOSE_CONTENT,
  WHY_CHOOSE_STATS,
} from "@/constants/home.constants";

// Animated background particles
const FloatingParticle = ({
  delay,
  size,
  left,
  duration,
}: {
  delay: string;
  size: number;
  left: string;
  duration: string;
}) => (
  <div
    className="absolute rounded-full bg-gradient-to-br from-orange-300/20 to-amber-300/20 animate-float-particle"
    style={{
      width: size,
      height: size,
      left,
      animationDelay: delay,
      animationDuration: duration,
    }}
  />
);

// Interactive Feature Card with scroll animation
const FeatureCard = ({
  feature,
  index,
  isHovered,
  onHoverEnter,
  onHoverLeave,
  isInView,
}: {
  feature: (typeof FEATURES)[0];
  index: number;
  isHovered: boolean;
  onHoverEnter: () => void;
  onHoverLeave: () => void;
  isInView: boolean;
}) => {
  return (
    <div
      className={`group relative rounded-2xl border ${feature.borderColor} ${feature.bgColor} p-6 lg:p-8 transition-all duration-500 cursor-pointer overflow-hidden ${
        isHovered ? "scale-[1.02] shadow-2xl" : "hover:scale-[1.01] shadow-lg"
      } ${isInView ? "animate-blur-reveal" : "opacity-0 blur-lg translate-y-8"}`}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
      style={{ 
        animationDelay: `${index * 0.15}s`,
        animationFillMode: "forwards"
      }}
    >
      {/* Animated gradient border on hover */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 transition-opacity duration-500 ${
          isHovered ? "opacity-10" : ""
        }`}
      />

      {/* Corner accent */}
      <div
        className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${feature.color} opacity-10 blur-2xl transition-all duration-500 ${
          isHovered ? "opacity-30 scale-150" : ""
        }`}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div
          className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 text-white shadow-lg transition-transform duration-500 ${
            isHovered ? "scale-110 rotate-3" : ""
          }`}
        >
          {feature.icon}
        </div>

        {/* Title */}
        <h3 className="font-mori text-lg lg:text-xl font-bold text-black mt-5 mb-3">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="font-bohemian text-sm lg:text-base text-black/70 leading-relaxed">
          {feature.description}
        </p>

        {/* Learn more indicator */}
        <div
          className={`flex items-center gap-2 mt-4 font-bohemian text-sm transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
          }`}
        >
          <span
            className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent font-semibold`}
          >
            Learn more
          </span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isHovered ? "translate-x-1" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>

      {/* Interactive ripple effect */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transition-all duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

// Stats Item Component with scroll animation
const StatItem = ({
  stat,
  index,
  isInView,
}: {
  stat: (typeof WHY_CHOOSE_STATS)[0];
  index: number;
  isInView: boolean;
}) => (
  <div
    className={`group text-center p-4 lg:p-6 rounded-2xl border border-black/10 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 cursor-default ${
      isInView ? "animate-scroll-slide-up" : "opacity-0 translate-y-8"
    }`}
    style={{ 
      animationDelay: `${index * 0.1}s`,
      animationFillMode: "forwards"
    }}
  >
    <p className="font-mori text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
      {stat.value}
    </p>
    <p className="font-bohemian text-xs lg:text-sm text-black/60 mt-1">
      {stat.label}
    </p>
  </div>
);

export default function WhyChoose() {
  const { hoveredItem, handleHoverEnter, handleHoverLeave, isHovered } =
    useHoverState<string | null>(null);
  
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: statsRef, isInView: statsInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingParticle delay="0s" size={60} left="10%" duration="8s" />
        <FloatingParticle delay="2s" size={40} left="80%" duration="10s" />
        <FloatingParticle delay="4s" size={80} left="60%" duration="12s" />
        <FloatingParticle delay="1s" size={50} left="30%" duration="9s" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with scroll animations */}
        <div ref={headerRef} className="text-center mb-16 lg:mb-20">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 mb-6 ${
              headerInView ? "animate-blur-reveal" : "opacity-0 blur-lg"
            }`}
            style={{ animationFillMode: "forwards" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="font-bohemian text-xs uppercase tracking-widest text-black/60">
              {WHY_CHOOSE_CONTENT.badge}
            </span>
          </div>

          <div 
            className={`${headerInView ? "animate-blur-reveal" : "opacity-0 blur-lg translate-y-4"}`}
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <Typography variant="h2" weight="bold" align="center" className="mb-6">
              {WHY_CHOOSE_CONTENT.title}{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                {WHY_CHOOSE_CONTENT.highlight}
              </span>
            </Typography>
          </div>

          <p 
            className={`font-bohemian text-base lg:text-lg text-black/70 max-w-3xl mx-auto leading-relaxed ${
              headerInView ? "animate-blur-reveal" : "opacity-0 blur-lg translate-y-4"
            }`}
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            {WHY_CHOOSE_CONTENT.description}
          </p>
        </div>

        {/* Features Grid with scroll animations */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
              isHovered={isHovered(feature.id)}
              onHoverEnter={() => handleHoverEnter(feature.id)}
              onHoverLeave={handleHoverLeave}
              isInView={cardsInView}
            />
          ))}
        </div>

        {/* Bottom Stats Bar with scroll animations */}
        <div ref={statsRef} className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {WHY_CHOOSE_STATS.map((stat, index) => (
            <StatItem 
              key={stat.label} 
              stat={stat} 
              index={index}
              isInView={statsInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
