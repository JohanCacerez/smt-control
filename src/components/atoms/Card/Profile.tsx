interface ProfileProps {
  name: string;
  role: string;
  // Es una buena práctica definir qué colores son aceptables
  bgcolor?: "red-100" | "amber-100" | "blue-100";
}

export const Profile = ({
  name,
  role,
  bgcolor = "amber-100",
}: ProfileProps) => {
  // 1. Creamos un mapa donde las claves son los valores que pasas en la prop
  // y los valores son las clases COMPLETAS de Tailwind.
  const colorVariants = {
    "red-100": "bg-red-100",
    "amber-100": "bg-amber-100",
    "blue-100": "bg-blue-100",
  };

  // 2. Obtenemos la clase correcta del mapa. Si no se encuentra, usamos un valor por defecto.
  const backgroundColorClass =
    colorVariants[bgcolor] || colorVariants["amber-100"];

  return (
    <div
      // 3. Aplicamos la clase completa que seleccionamos del mapa.
      className={`flex flex-row items-center gap-2 ${backgroundColorClass} rounded-2xl p-2 shadow-md`}
    >
      <h3>{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};
