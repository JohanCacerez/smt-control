// Importa la imagen desde su ruta relativa correcta
import AoiIcon from "../../../assets/Icons_process/AOI.png";

export const Icon = () => {
  return (
    <div className="flex items-center justify-center w-12 h-12">
      <img
        className="rounded-xl"
        src={AoiIcon}
        alt="Icono de AOI"
        loading="lazy"
      />
    </div>
  );
};
