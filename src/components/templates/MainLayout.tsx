import { Outlet } from "react-router-dom";
// Asegúrate de que la ruta sea correcta, en tu código anterior era ../organism/Sidebar
import { Sidebar } from "../organism/Sidebar";

export const MainLayout = () => {
  return (
    // CAMBIO 1: Usa `h-screen` en lugar de `min-h-screen` para fijar la altura del layout a la pantalla.
    <div className="flex bg-slate-100 h-screen">
      {/* El Sidebar siempre estará presente */}
      <Sidebar />

      {/* CAMBIO 2: Añade `overflow-y-auto` al <main> y usa `flex-1` para que ocupe el espacio restante. */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* <Outlet/> actúa como un marcador de posición para las rutas anidadas */}
        <Outlet />
      </main>
    </div>
  );
};
