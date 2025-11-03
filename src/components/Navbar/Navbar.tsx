import React from "react";
import Link from "next/link";
import { NAV_ITEMS, NAV_CONFIG } from "./navbar.constants";

function Navbar() {
  return (
    <nav className="relative bg-black w-1/2 mx-auto rounded-b-[70px] border border-black">
      {/* Decorative corner elements */}
      <div className="absolute w-[40px] h-[40px] z-10 bg-black left-[-33px] top-[-5px]"></div>
      <div className="absolute w-[40px] h-[40px] z-20 bg-white left-[-33px] top-[-2px] rounded-tr-[70px]"></div>
      <div className="absolute w-[40px] h-[40px] z-10 bg-black right-[-33px] top-[-5px]"></div>
      <div className="absolute w-[40px] h-[40px] z-20 bg-white right-[-35px] top-[-2px] rounded-tl-[70px]"></div>

      {/* Main content container */}
      <div className="relative z-30 flex items-center justify-between px-6 py-4 md:px-8 md:py-3">
        {/* Logo */}
        <Link
          href={NAV_CONFIG.logo.href}
          className="text-navbar-text font-medium text-lg hover:opacity-80 transition-opacity shrink-0"
        >
          {NAV_CONFIG.logo.text}
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 justify-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-navbar-text font-medium text-base hover:opacity-80 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Launch App Button */}
        <Link
          href={NAV_CONFIG.launchApp.href}
          className="bg-navbar-button-bg text-navbar-button-text font-medium px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity text-sm md:text-base shrink-0"
        >
          {NAV_CONFIG.launchApp.label}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
