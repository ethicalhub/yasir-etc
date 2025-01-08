import clsx from "clsx";
import React from "react";

// export const ButtonVariant = {
//   Primary: "primary",
//   Secondary: "secondary",
//   Outline: "outline",
//   TransparentBg: "transparent_bg",
// };

const variantsClasses: Record<string, string> = {
  primary: "bg-primary border-primary text-white",
  secondary: "bg-secondary border-secondary text-white",
  outline: "border-primary text-primary",
  transparent_bg: "text-dark !border-0",
};

const baseClasses =
  "flex items-center border-2 text-base font-medium justify-center py-2 px-5 transition-all rounded-lg duration-200 ease-in-out hover:bg-opacity-50 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed";

interface ButtonProps {
  variant: string;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}

const Button = ({
  variant = "primary",
  disabled = false,
  icon,
  children,
  className,
  type = undefined,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={clsx(
        baseClasses,
        variantsClasses[variant],
        !disabled && "hover:scale-105",
        className,
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
