import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { Spinner } from "../Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  inverse?: boolean;
  isLoading?: boolean;

  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "min-w-16 p-2",
  md: "min-w-32 py-2 px-4",
  lg: "min-w-48 p-4",
};

export const Button = ({
  children,
  isLoading = false,
  inverse = false,
  className,
  size = "md",
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center rounded border border-primary bg-primary p-2 text-white transition hover:border-primary hover:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        inverse &&
          "blur:bg-transparent bg-transparent text-primary hover:bg-primary hover:text-white",
        sizeStyles[size],
        className,
      )}
      {...rest}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
