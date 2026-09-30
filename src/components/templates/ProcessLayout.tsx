import { Outlet, useLocation } from "react-router-dom";
import AoiSidebar from "../organism/Sidebars/AOISidebar";
import PickandPlaceSidebar from "../organism/Sidebars/PAPSidebar";

// Definimos el objeto mapeando el proceso raíz con su respectivo sidebar
const sidebarComponents: Record<string, React.ReactNode> = {
  aoi: <AoiSidebar />,
  "pick-and-place": <PickandPlaceSidebar />,
};

export const ProcessLayout = () => {
  const location = useLocation();

  /**
   * 💡 EXPLICACIÓN DE LA MEJORA:
   * Si la URL es "/pick-and-place/dashboard", al hacer .split("/") obtenemos:
   * ["", "pick-and-place", "dashboard"]
   *
   * Tomando el índice [1] siempre obtendremos el nombre del proceso principal ("pick-and-place"),
   * sin importar en qué sub-pantalla interna estemos parados.
   */
  const currentPath = location.pathname.split("/")[1] ?? "";

  // Buscamos el sidebar usando el nombre del proceso raíz
  const ActiveSidebar = sidebarComponents[currentPath] || null;

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* 1. Este Sidebar se mantendrá FIJO e inteligente en todas las sub-rutas */}
      {ActiveSidebar}

      {/* 2. Contenedor de la página de trabajo */}
      <main className="flex-1 overflow-y-auto p-6 bg-slate-800 text-white">
        <Outlet />
      </main>
    </div>
  );
};
