import type { LabelHTMLAttributes } from "react";

export interface CustomLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string;
}

export const Label = ({ text, className = "", ...rest }: CustomLabelProps) => {
  const baseStyles = "text-sm font-semibold text-gray-700 block mb-1";

  return (
    <label className={`${baseStyles} ${className}`} {...rest}>
      {text}
    </label>
  );
};
