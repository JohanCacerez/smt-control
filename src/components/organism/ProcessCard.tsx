import { Icon } from "../atoms/Card/Icon";
import { Title } from "../atoms/Title";
import { Profile } from "../atoms/Card/Profile";

interface ProcessCardProps {
  bgImage: string;
}

export const ProcessCard = ({ bgImage }: ProcessCardProps) => {
  return (
    // Se cambiaron las clases: se eliminó `max-w-md` y se añadieron `w-96` y `h-[480px]` para un tamaño fijo.
    <div className="w-96 h-[480px] rounded-t-2xl bg-gray-400 overflow-hidden">
      <section
        className="bg-cover bg-center rounded-t-2xl bg-no-repeat p-6 py-10 min-h-40 flex flex-row items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-white/02 backdrop-blur-sm border border-white/20 flex rounded-2xl p-2 items-center gap-2 shadow-lg">
          <Icon />
          <Title text="Pick and Place" level="h3" />
        </div>
      </section>

      <section className="p-6 flex flex-col gap-4">
        <div>
          <Title text="Descripción del proceso" level="h5" />
        </div>
        <div>
          <Title text="Personal a cargo" level="h5" />
          <Profile name="John Doe" role="Supervisor" bgcolor="red-100" />
        </div>
      </section>
    </div>
  );
};
