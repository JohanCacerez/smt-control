import { NavLink } from "../atoms/NavLink";
import { Icon, type IconName } from "../atoms/Icon";

// 1. Definimos los tipos de variantes de color disponibles
type NavItemVariant = "light" | "dark";

interface NavItemProps {
  to: string;
  label: string;
  iconName: IconName;
  variant?: NavItemVariant;
}

export const NavItem = ({
  to,
  label,
  iconName,
  variant = "light",
}: NavItemProps) => {
  const styles: Record<NavItemVariant, { container: string; icon: string }> = {
    light: {
      container:
        "text-slate-800 hover:text-black dark:text-slate-200 dark:hover:text-white transition-colors",
      icon: "w-5 h-5 text-slate-700 dark:text-slate-300",
    },
    dark: {
      container: "text-slate-400 hover:text-white transition-colors",
      icon: "w-5 h-5 text-slate-400 group-hover:text-white",
    },
  };

  return (
    <NavLink to={to}>
      {/* 3. Aplicamos dinámicamente las clases del contenedor según la variante */}
      <div
        className={`flex items-center gap-x-3 font-medium ${styles[variant].container}`}
      >
        {/* 4. Pasamos el color dinámico al átomo Icon */}
        <Icon name={iconName} className={styles[variant].icon} />

        <span>{label}</span>
      </div>
    </NavLink>
  );
};
