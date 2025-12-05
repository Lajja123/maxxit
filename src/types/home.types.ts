// Hero Section Types
export interface HeroStat {
  value: string;
  label: string;
}

export interface SignalCardProps {
  type: "bullish" | "bearish";
  coin: string;
  change: string;
  delay: string;
}

// Why Choose Section Types
export interface FeatureItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  hoverBg: string;
}

export interface WhyChooseStat {
  value: string;
  label: string;
}

// DotGrid Types
export interface DotGridConfig {
  dotSpacing: number;
  dotRadius: number;
  dotColor: string;
  mouseRadius: number;
  repelStrength: number;
  easeFactor: number;
}

export interface Dot {
  originX: number;
  originY: number;
  x: number;
  y: number;
}

export interface MousePosition {
  x: number;
  y: number;
}

