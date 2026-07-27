import { Routes, Route } from "react-router-dom";

import { MainLayout } from "./components/templates/MainLayout";

import { Toaster } from "react-hot-toast";

import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Process } from "./pages/Process";

const LoginPage = () => <Login />;
const DashboardPage = () => <Dashboard />;
const LinesProductionPage = () => <h1>Página de Líneas de Producción</h1>;
const SettingsPage = () => <h1>Página de Configuración</h1>;
const ProcessPage = () => <Process />;
const NotFoundPage = () => <h1>404: Página no encontrada</h1>;
const TeamPage = () => <h1>Página del Equipo</h1>;
const TicketsPage = () => <h1>Página de Tickets</h1>;
const UserPage = () => <h1>Página del Usuario</h1>;

function App() {
  return (
    <>
      {/* El Toaster global queda en el nivel más alto, libre de layouts */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
            zIndex: 9999, // 📌 Forzamos a que siempre flote por encima de todo
          },
        }}
      />

      <Routes>
        {/* 🔑 RUTA INDEPENDIENTE: El login no tiene barra lateral ni menús del MainLayout */}
        <Route path="login" element={<LoginPage />} />

        {/* 🔒 RUTAS CON LAYOUT: Todo el resto de la app que requiere estar logueado */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="lines_production" element={<LinesProductionPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="tickets" element={<TicketsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
