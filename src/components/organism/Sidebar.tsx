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
    <aside className="w-64 h-screen bg-slate-800 flex flex-col text-white">
      {/* Sección del Logo/Título */}
      <div className="p-4 text-2xl font-bold border-b border-slate-700">
        {/* Usamos 'variant="dark"' para que el texto sea blanco */}
        <NavItem
          to="/"
          label="SMT CONTROL"
          iconName="FaMicrochip"
          variant="dark"
        />
      </div>

      {/* Contenedor de la navegación */}
      <nav className="grow pt-4">
        {/* Todos los NavItem deben usar variant="dark" sobre este fondo */}
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

      {/* Sección del Perfil de Usuario con Botón de Logout */}
      <div className="p-2 border-t border-slate-700">
        <div className="flex items-center justify-between">
          {/* El NavItem ahora ocupa solo el espacio que necesita */}
          <div className="grow">
            <NavItem
              to="/user"
              label="User"
              iconName="FaRegCircleUser"
              variant="dark"
            />
          </div>

          {/* Botón de Logout a la derecha */}
          <button
            onClick={handleLogout}
            className="p-3 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
            title="Cerrar sesión"
          >
            <Icon name="FaPowerOff" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
