import React from "react";

// Button variants interface
interface ButtonProps {
  variant?: "white" | "black";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  paddingX?: string;
  paddingY?: string;
}

// Button styles mapping
const getVariantStyles = (variant: string) => {
  const variants = {
    white:
      "bg-[#FFFFFF] border-[#222222] text-[#1A1A1A] hover:bg-[#FF6A00]  rounded-full border",
    black: "bg-[#222222] border-[#222222] text-white hover:bg-[#FF6A00] ",
  };

  return variants[variant as keyof typeof variants] || variants.white;
};

// Shadow styles - #000000 25% opacity, Y:1, blur: 2, position: outside
const shadowStyle = "shadow-[0_1px_2px_rgba(0,0,0,0.25)]";

// Main Button component
export const Button: React.FC<ButtonProps> = ({
  variant = "white",
  icon,
  iconPosition = "left",
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,

  ...props
}) => {
  const baseStyles = `group inline-flex items-center justify-center gap-3 p-4 rounded-full border transition-colors duration-300 ease-out text-sm sm:text-sm md:text-sm 2xl:text-base leading-none tracking-wide overflow-hidden`;

  const variantStyles = getVariantStyles(variant);
  const disabledStyles = disabled
    ? "opacity-50 cursor-not-allowed hover:bg-inherit hover:text-inherit"
    : "";

  const combinedClassName = [
    baseStyles,
    variantStyles,
    shadowStyle,
    disabledStyles,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const iconElement = icon ? (
    <span className="flex items-center">{icon}</span>
  ) : null;

  const leftArrowIndicator = (
    <span
      className="absolute inset-y-0 left-2 bottom-1 flex items-center text-current opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
      aria-hidden="true"
    >
      &rarr;
    </span>
  );

  const dotIndicator = (
    <span
      className="ml-1 h-1.5 w-1.5 rounded-full bg-current transition-opacity duration-300 group-hover:opacity-0"
      aria-hidden="true"
    />
  );

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <span className="relative flex items-center gap-3 pl-6 pr-2">
        {leftArrowIndicator}
        {iconPosition === "left" && iconElement}
        <span className="transition-transform duration-300 group-hover:translate-x-4">
          {children}
        </span>
        {iconPosition === "right" && iconElement}
        {dotIndicator}
      </span>
    </button>
  );
};

// Export default
export default Button;
