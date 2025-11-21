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
    <div className="relative bg-[#02040A] text-white">
      <Hero />

      <div className="relative mx-auto flex w-full max-w-[1920px] flex-col overflow-hidden pb-20 pt-12 lg:flex-row lg:items-start">
        <div className="flex-1 space-y-24 overflow-hidden">
          {sectionsConfig.map(({ id, Component }) => (
            <section
              id={id}
              key={id}
              className={`scroll-mt-24 ${
                id === "section-usecases" || id === "section-walkthrough"
                  ? "border-0 p-0"
                  : "border border-white/5 bg-white/3 p-6 shadow-[0_20px_120px_rgba(9,9,14,0.6)] sm:p-10"
              }`}
            >
              <Component />
            </section>
          ))}
        </div>
        <aside className="hidden w-full max-w-[290px] shrink-0 lg:sticky lg:top-20 lg:block">
          <div className="relative border border-white/10 bg-white/5/30 p-6 backdrop-blur">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-white/60">
              Sections
            </p>
            <nav className="flex flex-col gap-3 text-sm">
              {sectionNav.map(({ id, label, isActive }, index) => (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`relative flex items-center justify-between rounded-2xl px-4 py-3 text-left transition-colors ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-white/60 hover:text-white/90"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold ${
                        isActive
                          ? "border-[#54D6FF] text-white"
                          : "border-white/20"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {label}
                  </span>
                  {/* <span
                    className={`h-1 w-10  ${
                      isActive
                        ? "bg-linear-to-r from-[#54D6FF] to-[#59FFAF]"
                        : "bg-white/20"
                    }`}
                  /> */}
                </button>
              ))}
            </nav>
          </div>
        </aside>
      </div>

      <div className="sticky bottom-4 z-20 mx-auto flex w-full max-w-lg gap-3 lg:hidden">
        {sectionNav.map(({ id, label, isActive }) => (
          <button
            key={id}
            onClick={() => handleNavClick(id)}
            className={`flex-1  px-4 py-3 text-xs font-semibold uppercase tracking-widest ${
              isActive
                ? "bg-linear-to-r from-[#54D6FF] via-[#8A5BFF] to-[#59FFAF] text-white shadow-lg"
                : "bg-white/5 text-white/60"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
