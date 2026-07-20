import { NavLink } from "../atoms/NavLink";
import { Icon, type IconName } from "../atoms/Icon";

interface NavItemProps {
  to: string;
  label: string;
  iconName: IconName; // Forzamos a que sea un string de un icono real
}

export const NavItem = ({ to, label, iconName }: NavItemProps) => {
  return (
    <NavLink to={to}>
      <div className="flex items-center gap-x-3">
        {/* Usamos el átomo Icon */}
        <Icon name={iconName} className="w-5 h-5 text-white" />
        <span>{label}</span>
      </div>
    </NavLink>
  );
};
