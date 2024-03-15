/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  type Control,
  Controller,
  type FieldErrors,
  type FieldError,
} from "react-hook-form";

import { type StateManagerProps } from "node_modules/react-select/dist/declarations/src/useStateManager";
import ReactSelect, { type StylesConfig } from "react-select";

interface SelectProps extends StateManagerProps {
  name: string;
  label?: string;
  errors?: FieldErrors;
  control?: Control<any, any>;
}

export const Select = ({
  name,
  label,
  errors,
  control,
  ...rest
}: SelectProps) => {
  const hasError = !!errors && !!errors[name];

  return (
    <div className="w-full">
      {!!label && <label>{label}</label>}

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ReactSelect
            {...field}
            {...rest}
            styles={{
              menuList: (styles) => ({
                ...styles,
                backgroundColor: "#2c2c2c",
              }),
              control: (styles) => ({
                ...styles,
                backgroundColor: "#2c2c2c",
                borderColor: hasError ? "#ff0000" : "#e5e7eb",
              }),
              option: (styles) => ({
                ...styles,
                backgroundColor: "#2c2c2c",
                color: "#fff",
                ":hover": {
                  backgroundColor: "#4b5563",
                },
              }),
              singleValue: (styles) => ({
                ...styles,
                color: "#fff",
              }),
            }}
          />
        )}
      />

      {hasError && (
        <span className="text-sm text-red-500">
          {(errors?.[name] as FieldError).message}
        </span>
      )}
    </div>
  );
};
