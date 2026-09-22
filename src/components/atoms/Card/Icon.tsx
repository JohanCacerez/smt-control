export const Icon = ({ icon }: { icon: string }) => {
  return (
    <div className="flex items-center justify-center w-12 h-12">
      <img
        className="rounded-xl"
        src={icon}
        alt="Icono de proceso"
        loading="lazy"
      />
    </div>
  );
};
