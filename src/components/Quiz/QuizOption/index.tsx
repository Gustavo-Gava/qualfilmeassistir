import {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";

interface QuizQuestionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isSelected?: boolean;
  isWrong?: boolean;
}

export const QuizOption = ({
  children,
  isSelected = false,
  isWrong = false,
  className,
  ...rest
}: QuizQuestionProps) => {
  return (
    <button
      className={twMerge(
        "bg-background flex rounded border-2 border-transparent px-4 py-2 text-left",
        isSelected && "border-primary backdrop-brightness-125",
        isWrong && "border-red-500 backdrop-brightness-125",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
