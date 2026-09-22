import { ProcessCard } from "../components/organism/ProcessCard";

import bgPickAndPlace from "../assets/Bg_images/PickAndPlace.png";

// Importa la imagen desde su ruta relativa correcta
import AoiIcon from "../assets/Icons_process/PickAndPlace.png";

export const Process = () => {
  return (
    <div>
      Process
      <ProcessCard
        bgImage={bgPickAndPlace}
        iconSrc={AoiIcon}
        proccessName="Pick and Place"
        description="Este es un proceso de ejemplo que describe cómo funciona el Pick and Place en la línea de producción."
        profiles={[
          { name: "John Doe", role: "Supervisor", bgcolor: "red-100" },
          { name: "Jane Smith", role: "Operator", bgcolor: "blue-100" },
        ]}
      />
    </div>
  );
};
