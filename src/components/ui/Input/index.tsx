import { type InputHTMLAttributes, forwardRef } from "react";
import { type FieldError, type FieldErrors } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  errors?: FieldErrors;
  valid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, className, name, errors, valid = false, ...rest }: InputProps,
    ref,
  ) => {
    const hasError = !!errors && !!errors[name];

    return (
      <div className="flex w-full flex-col">
        {!!label && (
          <label className="text-white" htmlFor={name}>
            {label}
          </label>
        )}

        <input
          className={twMerge(
            "flex w-full rounded border border-gray-200 bg-transparent px-2 py-1 text-white",
            hasError && "border-red-500",
            valid && "border-green-500",
            className,
          )}
          {...rest}
          name={name}
          ref={ref}
        />

        {hasError && (
          <span className="text-sm text-red-500">
            {(errors?.[name] as FieldError).message}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
