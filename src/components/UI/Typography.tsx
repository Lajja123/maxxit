import React from "react";

// Typography variants interface
interface TypographyProps {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle"
    | "body"
    | "button";
  color?: "primary" | "secondary" | "accent" | "white" | string; // allow hex colors like #1a1a1a
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  align?: "left" | "center" | "right" | "justify";
  className?: string;
  children: React.ReactNode;
}

// Typography styles mapping with full responsive breakpoints
const getTypographyStyles = (variant: string) => {
  const styles = {
    h1: "text-3xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-6xl leading-tight",
    h2: "text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight tracking-tight",
    h3: "text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-snug tracking-tight",
    h4: "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-snug tracking-tight",
    h5: "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-snug",
    h6: "text-xs sm:text-xs md:text-base lg:text-lg xl:text-lg leading-snug",
    subtitle:
      "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed tracking-wide",
    body: "text-xs sm:text-sm md:text-md 2xl:text-base leading-relaxed",
    button:
      "text-xs sm:text-sm md:text-sm 2xl:text-lg  leading-none tracking-wide  font-ppmori",
  };

  return styles[variant as keyof typeof styles] || styles.body;
};

// Color styles mapping
const getColorStyles = (color: string) => {
  const colors = {
    // mapped to your project palette only
    primary: "text-[#1A1A1A]",
    secondary: "text-[#000000]",
    accent: "text-[#A885CD]",
    white: "text-[#FFFFFF]",
  };

  // If a hex color is provided, use tailwind arbitrary value syntax
  if (color.startsWith("#")) {
    return `text-[${color}]`;
  }

  return colors[color as keyof typeof colors] || colors.primary;
};

// Weight styles mapping
const getWeightStyles = (weight: string) => {
  const weights = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  return weights[weight as keyof typeof weights] || weights.normal;
};

// Alignment styles mapping
const getAlignStyles = (align: string) => {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  return alignments[align as keyof typeof alignments] || alignments.left;
};

// Main Typography component
export const Typography: React.FC<TypographyProps> = ({
  variant = "body",
  color = "primary",
  weight = "normal",
  align = "left",
  className = "",
  children,
  ...props
}) => {
  // Get element tag based on variant
  const getElement = () => {
    const elementMap = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      subtitle: "p",
      body: "p",
      button: "button",
    };

    return elementMap[variant as keyof typeof elementMap] || "p";
  };

  const Element = getElement() as keyof React.JSX.IntrinsicElements;

  // Combine all styles
  const combinedClassName = [
    "font-mori", // Base font family is PPMori
    getTypographyStyles(variant),
    getColorStyles(color),
    getWeightStyles(weight),
    getAlignStyles(align),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return React.createElement(
    Element,
    { className: combinedClassName, ...props },
    children
  );
};

// Export default
export default Typography;
