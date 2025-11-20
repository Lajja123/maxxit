"use client";

import React, { useState } from "react";
import Hero from "@/components/Home/Hero";
import Section2 from "@/components/Home/Section2";
import { AnimatedHeroImage } from "@/components/Home/AnimatedHeroImage";

function Homepage() {
  const [heroStart, setHeroStart] = useState(0);
  const [heroEnd, setHeroEnd] = useState(0);
  const [section2Start, setSection2Start] = useState(0);
  const [section2End, setSection2End] = useState(0);

  const handleHeroMount = (start: number, end: number) => {
    setHeroStart(start);
    setHeroEnd(end);
  };

  const handleSection2Mount = (start: number, end: number) => {
    setSection2Start(start);
    setSection2End(end);
  };

  // Only render animated image when we have position data
  const hasPositionData =
    heroStart !== 0 &&
    heroEnd !== 0 &&
    section2Start !== 0 &&
    section2End !== 0;

  return (
    <div className="relative">
      <Hero onMount={handleHeroMount} />
      {hasPositionData && (
        <AnimatedHeroImage
          heroStart={heroStart}
          heroEnd={heroEnd}
          section2Start={section2Start}
          section2End={section2End}
        />
      )}
      <Section2 onMount={handleSection2Mount} />
    </div>
  );
}

export default Homepage;
