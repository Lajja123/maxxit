"use client";

import React, { useEffect, useMemo, useState } from "react";

import GetStarted from "@/components/Home/GetStared";
import Hero from "@/components/Home/Hero";
import Signals from "@/components/Home/Signals";
import Usecase from "@/components/Home/Usecase";
import Walkthrough from "@/components/Home/Walkthrough";

const sectionsConfig = [
  { id: "section-usecases", label: "Usecases", Component: Usecase },
  {
    id: "section-signals",
    label: "Top weekly signal provider",
    Component: Signals,
  },
  {
    id: "section-walkthrough",
    label: "Maxxit walkthrough",
    Component: Walkthrough,
  },
  { id: "section-get-started", label: "Get started", Component: GetStarted },
];

function Homepage() {
  const [activeSection, setActiveSection] = useState(sectionsConfig[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: 0.25,
      }
    );

    sectionsConfig.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const sectionNav = useMemo(
    () =>
      sectionsConfig.map((section) => ({
        ...section,
        isActive: section.id === activeSection,
      })),
    [activeSection]
  );

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative  text-white">
      <Hero />
      <GetStarted />
    </div>
  );
}

export default Homepage;
