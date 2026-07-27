import { Icon } from "../atoms/Card/Icon";
import { Title } from "../atoms/Title";

export const ProcessCard = () => {
  return (
    <div>
      <section>
        <Icon />
        <Title text="Pick and Place" level="h2" />
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
