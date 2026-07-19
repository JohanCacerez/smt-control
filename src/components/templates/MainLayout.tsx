import { Outlet } from "react-router-dom";
import { Sidebar } from "../organism/Sidebar";

export const MainLayout = () => {
  return (
    // Usamos flexbox para el layout principal
    <div className="flex bg-slate-100 min-h-screen">
      {/* El Sidebar siempre estará presente */}
      <Sidebar />

      {/* El contenido de la página cambiará aquí */}
      <main className="flex-grow p-8">
        {/* <Outlet/> actúa como un marcador de posición para las rutas anidadas */}
        <Outlet />
      </main>
    </div>
  );
};
