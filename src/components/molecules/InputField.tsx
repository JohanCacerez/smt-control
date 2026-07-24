import type { InputHTMLAttributes } from "react"; // 1. Importamos los atributos nativos de HTML
import { InputText } from "../atoms/InputText";
import { Label } from "../atoms/Label";

// 2. Extendemos de los atributos nativos omitiendo "className" para evitar conflictos
interface InputFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> {
  labelText: string;
  id?: string;
  className?: string; // Esta clase afectará al contenedor general (div)
  inputClassName?: string; // Opcional: por si quieres enviar clases específicas al input
  errorMessage?: string;
}

export const InputField = ({
  labelText,
  id,
  className = "",
  inputClassName = "",
  type = "text",
  placeholder,
  ...inputTextProps // 3. Aquí recolectamos propiedades como value, onChange, placeholder, disabled, etc.
}: InputFieldProps) => {
  // Generamos un ID autogenerado único si no se provee uno
  const inputId = id || `input-${labelText.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    // 4. El wrapper (div) solo recibe su clase contenedora
    <div className={className}>
      <Label htmlFor={inputId} text={labelText} />

      {/* 5. Le pasamos el placeholder y el resto de props nativas al átomo InputText */}
      <InputText
        id={inputId}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${inputClassName}`}
        {...inputTextProps} // 6. Pasamos las propiedades nativas de forma segura al input
      />
    </div>
  );
};
