export const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Analyst", href: "/analyst" },
  { label: "Pricing", href: "/pricing" },
] as const;

export const NAV_CONFIG = {
  logo: {
    text: "Maxxit",
    href: "/",
  },
  launchApp: {
    label: "Launch App",
    href: "/app",
  },
} as const;
