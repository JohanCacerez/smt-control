import { Link } from "react-router-dom"; // 1. Importamos Link
import { Icon } from "../atoms/Card/Icon";
import { Title } from "../atoms/Title";
import { Profile } from "../atoms/Card/Profile";

interface ProcessCardProps {
  bgImage: string;
  iconSrc: string;
  proccessName?: string;
  description?: string;
  to?: string; // 2. Agregamos la prop opcional para la ruta de destino
  profiles?: {
    name: string;
    role: string;
    bgcolor?: "red-100" | "amber-100" | "blue-100";
  }[];
}

export const ProcessCard = ({
  bgImage,
  iconSrc,
  proccessName,
  description,
  to = "/", // 3. Valor por defecto si no se pasa la ruta
  profiles,
}: ProcessCardProps) => {
  return (
    // 4. Cambiamos el <div> principal por <Link> e indicamos la ruta con 'to'
    // Añadimos 'block' para que se comporte como un contenedor de bloque
    <Link
      to={to}
      className="block m-4 rounded-2xl bg-gray-400 overflow-hidden shadow-xl transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 no-underline text-inherit cursor-pointer"
    >
      <section
        className="bg-cover bg-center rounded-t-2xl bg-no-repeat p-6 py-10 min-h-40 flex flex-row items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-white/20 backdrop-blur-sm border border-white/20 flex rounded-2xl p-2 items-center gap-2 shadow-lg">
          <Icon icon={iconSrc} />
          <Title text={proccessName ?? "Nombre del proceso"} level="h3" />
        </div>
      </section>

      <section className="p-6 flex flex-col gap-4">
        <div>
          <Title text="Descripción del proceso" level="h5" />
          <p>{description ?? "Descripción no disponible"}</p>
        </div>
        <div>
          <Title text="Personal a cargo" level="h5" />
          {profiles?.map((profile, index) => (
            <Profile
              key={index}
              name={profile.name}
              role={profile.role}
              bgcolor={profile.bgcolor}
            />
          )) ?? <p>No hay personal a cargo</p>}
        </div>
      </section>
    </Link>
  );
};
