import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/templates/MainLayout";

// Simulación de los componentes de página.
// En un proyecto real, estos serían importados de 'src/components/5-pages/...'
const DashboardPage = () => <h1>Página de Dashboard</h1>;
const LinesProductionPage = () => <h1>Página de Líneas de Producción</h1>;
const SettingsPage = () => <h1>Página de Configuración</h1>;
const ProcessPage = () => <h1>Página de Proceso</h1>;
const NotFoundPage = () => <h1>404: Página no encontrada</h1>;
const TeamPage = () => <h1>Página del Equipo</h1>;
const TicketsPage = () => <h1>Página de Tickets</h1>;
const UserPage = () => <h1>Página del Usuario</h1>;

function App() {
  return (
    <Routes>
      {/* Ruta Padre que renderiza el Layout */}
      <Route path="/" element={<MainLayout />}>
        {/* Rutas Hijas que se renderizarán dentro del <Outlet /> del MainLayout */}
        <Route index element={<DashboardPage />} />{" "}
        {/* La página por defecto en "/" */}
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="lines_production" element={<LinesProductionPage />} />
        <Route path="process" element={<ProcessPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="tickets" element={<TicketsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="user" element={<UserPage />} />
        {/* Cualquier otra ruta no encontrada mostrará esta página */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
