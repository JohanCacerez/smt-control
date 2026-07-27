import { Icon } from "../atoms/Card/Icon";
import { Title } from "../atoms/Title";
import bgPickAndPlace from "../../assets/Bg_images/PickAndPlace.png";

export const ProcessCard = () => {
  return (
    <div>
      {/* 
        1. Usamos 'style' para inyectar de forma segura la ruta dinámica que Vite genera.
        2. Usamos 'className' con clases estándar de Tailwind para el diseño y comportamiento.
      */}
      <section
        className="bg-cover bg-center bg-no-repeat p-6 min-h-40 flex flex-row"
        style={{ backgroundImage: `url(${bgPickAndPlace})` }}
      >
        <div className="bg-white flex rounded-2xl p-4 items-center gap-4">
          <Icon />
          <Title text="Pick and Place" level="h2" />
        </div>
      </section>

      <section>
        <div>
          <Title text="Subtitulo de proceso" level="h3" />
          <Title text="Descripción del proceso" level="h4" />
        </div>
        <div>
          <Title text="Personal a cargo" level="h4" />
          <p>Persona 1</p>
          <p>Persona 2</p>
          <p>Persona 3</p>
        </div>
      </section>
    </div>
  );
};
