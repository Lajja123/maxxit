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
  paddingX = "px-4",
  paddingY = "py-2",
  ...props
}) => {
  const baseStyles = `inline-flex items-center justify-center gap-2 ${paddingX} ${paddingY} rounded-full border transition-all duration-200  text-sm sm:text-sm md:text-sm 2xl:text-base leading-none tracking-wide`;

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

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {iconPosition === "left" && iconElement}
      <span>{children}</span>
      {iconPosition === "right" && iconElement}
    </button>
  );
};

// Export default
export default Button;
