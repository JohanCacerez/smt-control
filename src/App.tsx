import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/templates/MainLayout";

// Simulación de los componentes de página.
// En un proyecto real, estos serían importados de 'src/components/5-pages/...'
const DashboardPage = () => <h1>Página de Dashboard</h1>;
const UsersPage = () => <h1>Página de Usuarios</h1>;
const SettingsPage = () => <h1>Página de Configuración</h1>;
const NotFoundPage = () => <h1>404: Página no encontrada</h1>;

function App() {
  return (
    <Routes>
      {/* Ruta Padre que renderiza el Layout */}
      <Route path="/" element={<MainLayout />}>
        {/* Rutas Hijas que se renderizarán dentro del <Outlet /> del MainLayout */}
        <Route index element={<DashboardPage />} />{" "}
        {/* La página por defecto en "/" */}
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="settings" element={<SettingsPage />} />
        {/* Cualquier otra ruta no encontrada mostrará esta página */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
