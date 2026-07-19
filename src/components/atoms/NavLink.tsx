import { NavLink as RouterNavLink } from "react-router-dom";
import React from "react";

interface CustomNavLinkProps {
  to: string;
  children: React.ReactNode;
}

export const CustomNavLink = ({ to, children }: CustomNavLinkProps) => {
  // Clases base que se aplican siempre
  const baseClasses =
    "block px-4 py-3 text-white transition-colors duration-200 hover:bg-slate-700";

  // Clases que solo se aplican cuando el enlace está activo
  const activeClasses = "bg-slate-700 font-bold";

  return (
    <RouterNavLink
      to={to}
      // La función recibe { isActive } y devuelve las clases correspondientes
      className={({ isActive }) =>
        isActive ? `${baseClasses} ${activeClasses}` : baseClasses
      }
    >
      {children}
    </RouterNavLink>
  );
};
