
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const SectionTitle = ({ 
  subtitle, 
  title, 
  description, 
  align = "center",
  className 
}: SectionTitleProps) => {
  return (
    <div 
      className={cn(
        "max-w-3xl mx-auto mb-12", 
        align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center",
        className
      )}
    >
      {subtitle && (
        <p className="section-subtitle">{subtitle}</p>
      )}
      <h2 className="section-title mb-4">{title}</h2>
      {description && (
        <p className="text-gray-600 text-pretty mt-4 text-lg">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
