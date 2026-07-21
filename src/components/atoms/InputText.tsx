import type { InputHTMLAttributes } from "react";

// 1. Heredamos de los atributos nativos de HTML de React para que TypeScript reconozca ...rest
interface CustomInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  focusIsActive?: boolean;
}

export const InputText = ({
  focusIsActive = false,
  className = "",
  ...rest
}: CustomInputTextProps) => {
  const baseStyles =
    "px-4 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all";

  return (
    <input
      type="text"
      autoFocus={focusIsActive}
      className={`${baseStyles} ${className}`}
      {...rest}
    />
  );
};
