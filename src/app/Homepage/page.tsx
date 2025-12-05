import React from "react";
import Hero from "@/components/Home/Hero";
import WhyChoose from "@/components/Home/WhyChoose";
import HowItWorks from "@/components/Home/HowItWorks";

function Homepage() {
  return (
    <div className="relative">
      <Hero />
      <WhyChoose />
      <HowItWorks />
    </div>
  );
}

export default Homepage;
