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
    <nav
      className={`fixed inset-x-0 top-0 z-50  ${isMenuOpen ? "shadow-lg" : ""}`}
    >
      <div className="relative z-30 flex items-center justify-between">
        <Link
          href={NAV_CONFIG.logo.href}
          className="flex shrink-0 items-center gap-2 px-6 py-4 font-semibold text-2xl tracking-wider text-black md:px-8 md:py-[18px]"
        >
          <Image src={logo} alt="Maxxit" width={50} height={50} />
          {NAV_CONFIG.logo.text}
        </Link>

        <div className="px-4 md:px-6 lg:px-10">
          <div className="flex items-center gap-3 py-3 sm:gap-4 md:gap-6">
            <Button
              type="button"
              variant="black"
              paddingX="px-6"
              paddingY="py-3"
              className="hidden uppercase rounded-full border border-black/20 text-black transition sm:inline-flex"
            >
              {NAV_CONFIG.launchApp.label}
            </Button>

            <div className="relative">
              <button
                type="button"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="maxxit-menu"
                className={`group flex min-w-[120px] items-center justify-center gap-4 rounded-full border py-3 px-6 text-sm bold uppercase tracking-[0.2em] transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                  isMenuOpen
                    ? "border-black/60 bg-black/10 text-black"
                    : "border-black/30 bg-white/60 text-black hover:border-black/60"
                }`}
              >
                <span className="relative inline-flex h-4 text-xs tracking-[0.4em]">
                  <span
                    className={`transition-opacity duration-200 ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    Menu
                  </span>
                  <span
                    className={`absolute inset-0 transition-opacity duration-200 ${
                      isMenuOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Close
                  </span>
                </span>
                <span
                  className={`relative flex h-5 w-3 items-center justify-center transition-transform duration-300 ${
                    isMenuOpen ? "rotate-0" : "rotate-90"
                  } group-hover:rotate-0`}
                  aria-hidden="true"
                >
                  <span
                    className={`absolute h-1.5 w-1.5 rounded-full bg-current transition-transform duration-300 ${
                      isMenuOpen ? "translate-y-0" : "-translate-y-1"
                    } group-hover:translate-y-0`}
                  />
                  <span
                    className={`absolute h-1.5 w-1.5 rounded-full bg-current transition-transform duration-300 ${
                      isMenuOpen ? "translate-y-0" : "translate-y-1"
                    } group-hover:translate-y-0`}
                  />
                </span>
              </button>

              <div
                id="maxxit-menu"
                aria-hidden={!isMenuOpen}
                className={`absolute right-0 top-full mt-8 w-[min(90vw,360px)] rounded-3xl border border-black/10 bg-white/95 p-6 shadow-2xl ring-1 ring-black/5 transition-all duration-200 ease-out ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100 pointer-events-auto"
                    : "-translate-y-4 opacity-0 pointer-events-none"
                }`}
              >
                <div className="flex flex-col gap-4">
                  {NAV_ITEMS.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-2xl border border-black/10 px-4 py-3 text-left text-black transition-all duration-300 ease-out hover:border-black/40 hover:bg-black/5 ${
                        isMenuOpen
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 60}ms` }}
                    >
                      <span className="text-[10px] uppercase tracking-[0.4em] text-black/40">
                        0{index + 1}
                      </span>
                      <p className="mt-1 text-lg font-semibold">{item.label}</p>
                      <span className="text-xs text-black/60">
                        {item.label === "About"}
                        {item.label === "Analyst"}
                        {item.label === "Pricing"}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center gap-2 rounded-full border border-black/15 px-3 py-2 text-xs text-black/80 transition hover:border-black/40 hover:bg-black/5"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {label}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 flex flex-col items-start gap-4 text-[10px] uppercase tracking-[0.4em] text-black/50">
                  {LEGAL_LINKS.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="hover:text-black/80"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
