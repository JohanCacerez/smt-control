import * as FaIcons from "react-icons/fa6";

// Definimos un tipo que solo acepte nombres de iconos válidos de FA6
export type IconName = keyof typeof FaIcons;

interface IconProps {
  name: IconName;
  className?: string;
}

export const Icon = ({ name, className = "w-5 h-5 text-white" }: IconProps) => {
  const IconComponent = FaIcons[name];

  if (!IconComponent) {
    // Si escribes mal el nombre, devuelve un icono de advertencia para avisarte
    return <FaIcons.FaTriangleExclamation className={className} />;
  }

  return <IconComponent className={className} />;
};
