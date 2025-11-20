"use client";
import React, { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS, NAV_CONFIG } from "./navbar.constants";
import Button from "../UI/Button";
import Image from "next/image";
import logo from "@/assests/home/logo.svg";

type IconProps = React.SVGProps<SVGSVGElement>;

const GitHubIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0018 4.77 5.07 5.07 0 0017.91 1S16.73.65 14 2.48a13.38 13.38 0 00-5 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.69c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 17.13V21"
    />
  </svg>
);

const TwitterIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 4.01c-.77.35-1.6.58-2.47.69A4.15 4.15 0 0021.43 2a8.28 8.28 0 01-2.63 1.01 4.12 4.12 0 00-7 3.76A11.7 11.7 0 013 3.13a4.12 4.12 0 001.28 5.5 4.07 4.07 0 01-1.86-.52v.05a4.12 4.12 0 003.3 4 4.2 4.2 0 01-1.85.07 4.13 4.13 0 003.85 2.86A8.27 8.27 0 012 18.58a11.67 11.67 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.34 8.34 0 0022 4.01z"
    />
  </svg>
);

const TelegramIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 3.5L2.5 12l5.2 1.8M21.5 3.5l-4.8 17-8.5-6.7M21.5 3.5l-13.8 9.6"
    />
  </svg>
);

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/maxxit",
    Icon: GitHubIcon,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/maxxit",
    Icon: TwitterIcon,
  },
  {
    label: "Telegram",
    href: "https://t.me/maxxit",
    Icon: TelegramIcon,
  },
] as const;

const LEGAL_LINKS = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Docs", href: "/docs" },
] as const;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      {/* Top Navbar - Logo and Launch App Button */}
      <nav
        className={` z-50 w-full fixed top-0 left-0 right-0 bg-[#09090e] ${
          isMenuOpen ? "border-b border-white/10" : "border-b border-white/10"
        }`}
      >
        {/* Main content container */}
        <div className="relative z-30 flex items-center justify-between ">
          {/* Logo */}

          <Link
            href={NAV_CONFIG.logo.href}
            className={`px-6 py-4 md:px-8 md:py-[18px] flex items-center gap-2 font-semibold text-2xl tracking-wider hover:opacity-80 transition-opacity shrink-0 ${
              isMenuOpen ? "text-white" : "text-white"
            }`}
          >
            <Image src={logo} alt="Maxxit" width={50} height={50} />
            {NAV_CONFIG.logo.text}
          </Link>

          {/* Right side controls */}
          <div
            className={` border-l px-10 ${
              isMenuOpen ? "border-white/10" : "border-white/10"
            }`}
          >
            <div className="px-6 py-4 md:px-8 md:py-[18px] flex items-center gap-4 sm:gap-6 ">
              <Button
                type="button"
                className={`${isMenuOpen ? "text-white" : "text-white"}`}
              >
                {NAV_CONFIG.launchApp.label}
              </Button>

              <button
                type="button"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                className={`relative w-12 h-12 rounded-full transition ${
                  isMenuOpen
                    ? "border border-white/40 bg-transparent text-white hover:border-white"
                    : "border border-white/40 bg-transparent text-white hover:border-white"
                }`}
              >
                <span
                  className={`absolute left-1/2 block h-0.5 w-6 -translate-x-1/2 bg-current transition-all duration-300 ease-out ${
                    isMenuOpen
                      ? "top-1/2 -translate-y-1/2 rotate-45"
                      : "top-1/2 -translate-y-[10px]"
                  }`}
                />
                <span
                  className={`absolute left-1/2 block h-0.5 w-6 -translate-x-1/2 bg-current transition-opacity duration-300 ease-out ${
                    isMenuOpen
                      ? "opacity-0"
                      : "opacity-100 top-1/2 -translate-y-1/2"
                  }`}
                />
                <span
                  className={`absolute left-1/2 block h-0.5 w-6 -translate-x-1/2 bg-current transition-all duration-300 ease-out ${
                    isMenuOpen
                      ? "top-1/2 -translate-y-1/2 -rotate-45"
                      : "top-1/2 translate-y-[10px]"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <div
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center gap-10 px-6 pt-24 transition-all duration-500 ease-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="w-full max-w-3xl space-y-6">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group block rounded-3xl border border-white/10 bg-white/5 px-8 py-6 text-center transition-all duration-500 ease-out hover:border-white/30 hover:bg-white/10 ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="text-[11px] uppercase tracking-[0.5em] text-white/40">
                0{index + 1}
              </span>
              <p className="mt-3 text-3xl sm:text-4xl font-semibold text-white">
                {item.label}
              </p>
              <span className="mt-2 block text-sm text-white/60">
                {item.label === "About" &&
                  "Discover the story, team, and mission behind Maxxit."}
                {item.label === "Analyst" &&
                  "Dive into insights, analytics, and pro-grade tooling."}
                {item.label === "Pricing" &&
                  "Compare plans tailored for individuals and teams."}
              </span>
            </Link>
          ))}
        </div>

        <div
          className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-500 ease-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
          style={{ transitionDelay: `${NAV_ITEMS.length * 80}ms` }}
        >
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 hover:bg-white/5"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </div>

        <div
          className={`flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-[0.4em] text-white/40 transition-all duration-500 ease-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
          style={{ transitionDelay: `${NAV_ITEMS.length * 80 + 120}ms` }}
        >
          {LEGAL_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="hover:text-white/80 text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
