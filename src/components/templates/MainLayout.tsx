import { Outlet } from "react-router-dom";
// Cambiamos la importación del Sidebar por el nuevo Navbar superior (o tu componente modificado)
import { Sidebar } from "../organism/Sidebar";

export const MainLayout = () => {
  return (
    // 1. El contenedor padre ocupa exactamente el alto de la pantalla (h-screen)
    // y distribuye sus hijos en columna (flex flex-col) sin dejar que nada se desborde (overflow-hidden)
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-900">
      {/* 2. La barra de navegación superior se queda fija arriba */}
      {/* Al no tener clases de overflow, se mantiene siempre visible en su h-16 (64px) */}
      <Sidebar />

      {/* 3. El contenido principal ocupa todo el espacio restante (flex-1) */}
      {/* y es el único que tiene permitido hacer scroll vertical (overflow-y-auto) */}
      <main className="flex-1 overflow-y-auto p-6">
        {/* <Outlet/> renderizará aquí tus páginas (Dashboard, Líneas, Procesos, etc.) */}
        <Outlet />
      </main>
    </div>
  );
};
