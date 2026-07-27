// Importa la imagen desde su ruta relativa correcta
import AoiIcon from "../../../assets/Icons_process/AOI.png";

export const Icon = () => {
  return (
    <div className="flex items-center justify-center w-24 h-24">
      <img
        className="rounded-xl"
        src={AoiIcon}
        alt="Icono de AOI"
        loading="lazy"
      />
    </div>
  );
};
