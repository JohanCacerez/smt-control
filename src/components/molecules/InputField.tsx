import { InputText } from "../atoms/InputText";
import { Label } from "../atoms/Label";

interface InputFieldProps {
  labelText: string;
  id?: string;
  className?: string;
  errorMessage?: string;
  type?: string;
}

export const InputField = ({
  labelText,
  id,
  className = "",
  type = "text",
  ...inputTextProps
}: InputFieldProps) => {
  const inputId = id || `input-${labelText.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <div className={className} {...inputTextProps}>
      <Label htmlFor={inputId} text={labelText} />
      <InputText
        id={inputId}
        type={type}
        autoFocus={true}
        className={
          "w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        }
      />
    </div>
  );
};
