import { NavItem } from "../molecules/navItem";

export const Sidebar = () => {
  return (
    // Contenedor principal del Sidebar
    <aside className="w-64 h-screen bg-slate-800 flex flex-col">
      {/* Sección del Logo/Título */}
      <div className="p-5 text-white text-2xl font-bold border-b border-slate-700">
        SMT-CONTROL
      </div>

      {/* Contenedor de la navegación */}
      <nav className="flex-grow pt-4">
        <NavItem to="/dashboard" label="Dashboard" />
        <NavItem to="/users" label="Usuarios" />
        <NavItem to="/settings" label="Configuración" />
      </nav>

      {/* Opcional: Sección del Perfil de Usuario al final */}
      <div className="p-4 border-t border-slate-700 text-white">Perfil</div>
    </aside>
  );
};
