import { Outlet, useLocation } from "react-router-dom";
import AoiSidebar from "../organism/Sidebars/AOISidebar";
import PickandPlaceSidebar from "../organism/Sidebars/PAPSidebar";

// 1. Definimos el objeto con un índice de tipo string para que acepte cualquier búsqueda
const sidebarComponents: Record<string, React.ReactNode> = {
  aoi: <AoiSidebar />,
  "pick-and-place": <PickandPlaceSidebar />,
};

export const ProcessLayout = () => {
  const location = useLocation();

  // 2. Extraemos el path y aseguramos que sea un string (nunca undefined)
  const currentPath = location.pathname.split("/").pop() ?? "";

  // 3. Obtenemos el Sidebar. Si no existe en el mapa, será null
  const ActiveSidebar = sidebarComponents[currentPath] || null;

  return (
    <div className="flex h-full w-full overflow-hidden">
      {/* 1. Renderizado Condicional */}
      {ActiveSidebar}

      {/* 2. Contenedor de la página de trabajo */}
      <main className="flex-1 overflow-y-auto p-6 bg-slate-800 text-white">
        <Outlet />
      </main>
    </div>
  );
};
