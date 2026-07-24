import type { InputHTMLAttributes } from "react";
import { InputText } from "../atoms/InputText";
import { Label } from "../atoms/Label";

// 1. Definimos las variantes de color válidas
type InputFieldVariant = "light" | "dark";

interface InputFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> {
  labelText: string;
  id?: string;
  className?: string; // Afecta al div contenedor
  inputClassName?: string; // Afecta directamente al input
  errorMessage?: string;
  /** Variante de color: 'light' para texto oscuro (negro) o 'dark' para texto claro (blanco) */
  variant?: InputFieldVariant;
}

export const InputField = ({
  labelText,
  id,
  className = "",
  inputClassName = "",
  type = "text",
  placeholder,
  variant = "light", // 2. Definimos 'light' por defecto (texto oscuro)
  ...inputTextProps
}: InputFieldProps) => {
  const inputId = id || `input-${labelText.toLowerCase().replace(/\s+/g, "-")}`;

  // 3. Mapeamos la variante a la clase de color para el Label utilizando tus variables de Tailwind v4
  const labelColorClass =
    variant === "light"
      ? "text-content-title dark:text-content-title-dark" // Negro en modo claro, Blanco en modo oscuro
      : "text-white"; // Blanco absoluto (ideal para fondos negros fijos)

  return (
    <div className={className}>
      {/* 4. Pasamos la clase de color directamente al componente Label */}
      <Label htmlFor={inputId} text={labelText} className={labelColorClass} />

      <InputText
        id={inputId}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${inputClassName}`}
        {...inputTextProps}
      />
    </div>
  );
};
