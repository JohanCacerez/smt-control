import { CustomNavLink } from "../../components/atoms/Navlink";

// Asumamos que podrías tener un átomo Icon en el futuro
// import { Icon } from '../../1-atoms/Icon';

interface NavItemProps {
  to: string;
  label: string;
  // iconName?: string; // Opcional
}

export const NavItem = ({ to, label }: NavItemProps) => {
  return (
    <CustomNavLink to={to}>
      <div className="flex items-center gap-x-3">
        {/* {iconName && <Icon name={iconName} className="w-5 h-5" />} */}
        <span>{label}</span>
      </div>
    </CustomNavLink>
  );
};
