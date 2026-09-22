import { ProcessCard } from "../components/organism/ProcessCard";

import bgPickAndPlace from "../assets/Bg_images/PickAndPlace.png";

// Importa la imagen desde su ruta relativa correcta
import PAPIcon from "../assets/Icons_process/PickAndPlace.webp";
import AOIIcon from "../assets/Icons_process/AOI.webp";
import AXIIcon from "../assets/Icons_process/AXI.webp";
import ClinchingIcon from "../assets/Icons_process/Clinching.webp";
import ConveyorIcon from "../assets/Icons_process/Conveyor.webp";
import HotIcon from "../assets/Icons_process/Hot.webp";
import ICTIcon from "../assets/Icons_process/ICT.webp";
import LaserIcon from "../assets/Icons_process/Laser.webp";
import OvenIcon from "../assets/Icons_process/OvenReflow.webp";
import SPIIcon from "../assets/Icons_process/SPI.webp";
import SPPIcon from "../assets/Icons_process/SPP.webp";

export const Process = () => {
  return (
    <div>
      Process
      <section className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <ProcessCard
          bgImage={bgPickAndPlace}
          iconSrc={PAPIcon}
          proccessName="Pick and Place"
          description="Este es un proceso de ejemplo que describe cómo funciona el Pick and Place en la línea de producción."
          profiles={[
            { name: "John Doe", role: "Supervisor", bgcolor: "red-100" },
            { name: "Jane Smith", role: "Operator", bgcolor: "blue-100" },
          ]}
        />
        <ProcessCard
          bgImage={bgPickAndPlace}
          iconSrc={AOIIcon}
          proccessName="AOI"
          description="Este es un proceso de ejemplo que describe cómo funciona Automatic Optical Inspection en la línea de producción."
          profiles={[
            { name: "John Doe", role: "Supervisor", bgcolor: "red-100" },
            { name: "Jane Smith", role: "Operator", bgcolor: "blue-100" },
          ]}
        />
        <ProcessCard
          bgImage={bgPickAndPlace}
          iconSrc={AXIIcon}
          proccessName="AXI"
          description="Este es un proceso de ejemplo que describe cómo funciona Automated X-ray Inspection en la línea de producción."
          profiles={[
            { name: "John Doe", role: "Supervisor", bgcolor: "red-100" },
            { name: "Jane Smith", role: "Operator", bgcolor: "blue-100" },
          ]}
        />
        <ProcessCard
          bgImage={bgPickAndPlace}
          iconSrc={ClinchingIcon}
          proccessName="Clinching"
          description="Este es un proceso de ejemplo que describe cómo funciona el clinching en la línea de producción."
          profiles={[
            { name: "John Doe", role: "Supervisor", bgcolor: "red-100" },
            { name: "Jane Smith", role: "Operator", bgcolor: "blue-100" },
          ]}
        />
        <ProcessCard
          bgImage={bgPickAndPlace}
          iconSrc={ConveyorIcon}
          proccessName="Conveyor"
          description="Este es un proceso de ejemplo que describe cómo funciona el conveyor en la línea de producción."
          profiles={[
            { name: "John Doe", role: "Supervisor", bgcolor: "red-100" },
            { name: "Jane Smith", role: "Operator", bgcolor: "blue-100" },
          ]}
        />
        <ProcessCard
          bgImage={bgPickAndPlace}
          iconSrc={HotIcon}
          proccessName="Hotcaulking"
          description="Este es un proceso de ejemplo que describe cómo funciona el hotcaulking en la línea de producción."
          profiles={[
            { name: "John Doe", role: "Supervisor", bgcolor: "red-100" },
            { name: "Jane Smith", role: "Operator", bgcolor: "blue-100" },
          ]}
        />
        <ProcessCard
          bgImage={bgPickAndPlace}
          iconSrc={ICTIcon}
          proccessName="ICT"
          description="Este es un proceso de ejemplo que describe cómo funciona el ICT en la línea de producción."
          profiles={[
            { name: "John Doe", role: "Supervisor", bgcolor: "red-100" },
            { name: "Jane Smith", role: "Operator", bgcolor: "blue-100" },
          ]}
        />
        <ProcessCard
          bgImage={bgPickAndPlace}
          iconSrc={LaserIcon}
          proccessName="Laser"
          description="Este es un proceso de ejemplo que describe cómo funciona el Laser en la línea de producción."
          profiles={[
            { name: "John Doe", role: "Supervisor", bgcolor: "red-100" },
            { name: "Jane Smith", role: "Operator", bgcolor: "blue-100" },
          ]}
        />
        <ProcessCard
          bgImage={bgPickAndPlace}
          iconSrc={OvenIcon}
          proccessName="Oven Reflow"
          description="Este es un proceso de ejemplo que describe cómo funciona el Oven Reflow en la línea de producción."
          profiles={[
            { name: "John Doe", role: "Supervisor", bgcolor: "red-100" },
            { name: "Jane Smith", role: "Operator", bgcolor: "blue-100" },
          ]}
        />
        <ProcessCard
          bgImage={bgPickAndPlace}
          iconSrc={SPPIcon}
          proccessName="SPP"
          description="Este es un proceso de ejemplo que describe cómo funciona el Soldier Paste Print en la línea de producción."
          profiles={[
            { name: "John Doe", role: "Supervisor", bgcolor: "red-100" },
            { name: "Jane Smith", role: "Operator", bgcolor: "blue-100" },
          ]}
        />
        <ProcessCard
          bgImage={bgPickAndPlace}
          iconSrc={SPIIcon}
          proccessName="SPI"
          description="Este es un proceso de ejemplo que describe cómo funciona el SPI en la línea de producción."
          profiles={[
            { name: "John Doe", role: "Supervisor", bgcolor: "red-100" },
            { name: "Jane Smith", role: "Operator", bgcolor: "blue-100" },
          ]}
        />
      </section>
    </div>
  );
};
