// components/templates/MainLayout.jsx
import { Outlet } from "react-router-dom";
import { Sidebar } from "../organism/Sidebar"; // Actúa como tu Navbar superior

export const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-900">
      {/* Navbar superior global */}
      <Sidebar />

      {/* Contenedor principal */}
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};
