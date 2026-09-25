import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/templates/MainLayout";
import { Toaster } from "react-hot-toast";
import { ProcessLayout } from "./components/templates/ProcessLayout";

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
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
            zIndex: 9999,
          },
        }}
      />

      <Routes>
        {/* 🔑 RUTA INDEPENDIENTE */}
        <Route path="login" element={<LoginPage />} />

        {/* 🔒 RUTAS GENERALES CON NAVBAR SUPERIOR */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="lines_production" element={<LinesProductionPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="tickets" element={<TicketsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="user" element={<UserPage />} />

          {/* 🛠️ RUTAS ANIDADAS: Procesos SMT con Sidebar Lateral */}
          <Route element={<ProcessLayout />}>
            <Route
              path="pick-and-place"
              element={<h1>Página de Pick and Place</h1>}
            />
            <Route path="aoi" element={<h1>Página de AOI</h1>} />
            <Route
              path="spp"
              element={<h1>Página de Inspección de Pasta de Soldadura</h1>}
            />
            <Route path="spi" element={<h1>Página de Inspección de SPI</h1>} />
            <Route path="oven" element={<h1>Página de oven</h1>} />
            <Route path="axi" element={<h1>Página de axi</h1>} />
            <Route path="laser" element={<h1>Página de laser</h1>} />
            <Route path="clinching" element={<h1>Página de clinching</h1>} />
            <Route path="conveyor" element={<h1>Página de conveyor</h1>} />
            <Route
              path="hotcaulking"
              element={<h1>Página de hotcaulking</h1>}
            />
            <Route path="ict" element={<h1>Página de ict</h1>} />
          </Route>

          {/* Comodín de 404 al final del layout general */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
