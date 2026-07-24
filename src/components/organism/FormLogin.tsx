import { Title } from "../atoms/Title";
import { InputField } from "../molecules/InputField";
import { NavItem } from "../molecules/navItem";

export const FormLogin = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí irá tu lógica de autenticación (por ejemplo, con tu servicio de Supabase)
  };

  return (
    // 1. Contenedor con fondo semántico y bordes adaptables a modo claro y oscuro
    <div className="bg-background-card-light dark:bg-background-card-dark max-w-md w-full p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 transition-all">
      {/* 2. Átomo Title con margen inferior y centrado */}
      <Title
        text="Iniciar sesión"
        level="h1"
        className="text-center mb-8 text-content-title dark:text-content-title-dark"
      />

      {/* 3. Formulario con espaciado vertical consistente en sus inputs */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <InputField
          labelText="Correo electrónico"
          type="email"
          placeholder="Ingresa tu correo electrónico"
        />

        <InputField
          labelText="Contraseña"
          type="password"
          placeholder="Ingresa tu contraseña"
        />

        {/* 4. Botón adaptado a tus variables de color v4 */}
        <button
          type="submit"
          className="w-full cursor-pointer py-3 mt-2 rounded-lg bg-brand hover:bg-brand-dark text-white font-semibold shadow-md shadow-brand/10 hover:shadow-brand/20 active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-brand-light focus:ring-offset-2 dark:focus:ring-offset-background-card-dark"
        >
          Iniciar sesión
        </button>

        {/* 5. Enlace decorativo con espaciado superior y centrado */}
        <div className="flex justify-center pt-2">
          <NavItem
            label="¿Olvidaste tu contraseña?"
            to="/password_save"
            iconName="FaLock"
            variant="light" // Cambiado a 'light' porque el fondo del login suele ser claro por defecto. Si el fondo es negro usa 'dark'.
          />
        </div>
      </form>
    </div>
  );
};
