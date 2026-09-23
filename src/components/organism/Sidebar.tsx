import { useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabase"; // Asegúrate de que la ruta sea correcta
import toast from "react-hot-toast";

import { NavItem } from "../molecules/navItem";
import { Icon } from "../atoms/Icon"; // Importamos el átomo Icon

export const Sidebar = () => {
  const navigate = useNavigate();

  // Función para manejar el cierre de sesión
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error al cerrar sesión: " + error.message);
    } else {
      // Redirigimos al login después de cerrar sesión
      navigate("/login");
    }
  };

  return (
    <header className="w-full h-16 bg-slate-800 flex items-center justify-between px-6 text-white border-b border-slate-700 shadow-md">
      {/* 1. Sección del Logo/Título (Extremo izquierdo) */}
      <div className="flex items-center text-xl font-bold">
        {/* Usamos 'variant="dark"' para que el texto sea blanco */}
        <NavItem
          to="/"
          label="SMT CONTROL"
          iconName="FaMicrochip"
          variant="dark"
        />
      </div>

      {/* 2. Contenedor de la navegación (Centro) */}
      <nav className="flex items-center gap-2">
        {/* Todos los NavItem se alinean horizontalmente gracias a 'flex' */}
        <NavItem
          to="/dashboard"
          label="Dashboard"
          iconName="FaChartColumn"
          variant="dark"
        />
        <NavItem
          to="/lines_production"
          label="Líneas"
          iconName="FaIndustry"
          variant="dark"
        />
        <NavItem
          to="/process"
          label="Procesos"
          iconName="FaCircleNodes"
          variant="dark"
        />
        <NavItem to="/team" label="Equipo" iconName="FaUsers" variant="dark" />
        <NavItem
          to="/tickets"
          label="Tickets"
          iconName="FaToolbox"
          variant="dark"
        />
        <NavItem
          to="/settings"
          label="Configuración"
          iconName="FaGear"
          variant="dark"
        />
      </nav>

      {/* 3. Sección del Perfil de Usuario y Logout (Extremo derecho) */}
      <div className="flex items-center gap-4">
        <div className="flex items-center border-r border-slate-700 pr-4">
          <NavItem
            to="/user"
            label="User"
            iconName="FaRegCircleUser"
            variant="dark"
          />
        </div>

        {/* Botón de Logout */}
        <button
          onClick={handleLogout}
          className="p-2 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
          title="Cerrar sesión"
        >
          <Icon name="FaPowerOff" className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
