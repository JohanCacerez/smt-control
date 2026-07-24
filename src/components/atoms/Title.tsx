type TitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  text: string;
  className?: string;
  level?: TitleLevel;
}

export const Title = ({ text, className = "", level = "h1" }: TitleProps) => {
  const Tag = level;

  const baseClasses =
    "font-bold tracking-tight text-color-content-title dark:text-color-content-title-dark";

  const sizeClasses: Record<TitleLevel, string> = {
    h1: "text-3xl md:text-4xl",
    h2: "text-2xl md:text-3xl",
    h3: "text-xl md:text-2xl",
    h4: "text-lg md:text-xl",
    h5: "text-base md:text-lg",
    h6: "text-sm md:text-base",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[level]} ${className}`;
  return <Tag className={combinedClasses}>{text}</Tag>;
};
