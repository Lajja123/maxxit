import React from "react";

// Button variants interface
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "white" | "black";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  paddingX?: string;
  paddingY?: string;
}

// Button styles mapping
const getVariantStyles = (variant: string) => {
  const variants = {
    white: "bg-transparent text-[#1A1A1A]",
    black: "bg-transparent text-white",
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
  paddingX = "px-6",
  paddingY = "py-4",
  ...props
}) => {
  const baseStyles = `btn-gradient-border btn-clip-path relative inline-flex items-center justify-center gap-2 ${paddingX} ${paddingY} rounded-xl transition-all duration-200 text-sm sm:text-sm md:text-sm 2xl:text-base leading-none tracking-wide`;

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

  // Extract style from props if it exists
  const { style, ...restProps } = props;

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      disabled={disabled}
      style={{
        clipPath:
          "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
        background: "transparent",
        border: "none",
        outline: "none",
        ...style,
      }}
      {...restProps}
    >
      {/* Inner background */}
      <span
        className="absolute inset-[2px] rounded-[10px] bg-transparent -z-10"
        style={{
          clipPath:
            "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0% calc(100% - 8px), 0% 8px)",
        }}
      ></span>
      {/* Content */}
      <span className="relative z-10">
        {iconPosition === "left" && iconElement}
        <span>{children}</span>
        {iconPosition === "right" && iconElement}
      </span>
    </button>
  );
};

// Export default
export default Button;
