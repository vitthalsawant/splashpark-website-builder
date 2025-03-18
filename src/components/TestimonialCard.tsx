
import { Star } from 'lucide-react';
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role?: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  image?: string;
  className?: string;
}

const TestimonialCard = ({ 
  name, 
  role,
  text,
  rating,
  image,
  className 
}: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-2xl p-6 transition-all h-full flex flex-col",
        className
      )}
    >
      <div className="flex items-center space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic mb-6 flex-grow">{text}</p>
      
      <div className="flex items-center">
        {image && (
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full mr-4 object-cover" 
          />
        )}
        <div>
          <h4 className="font-medium">{name}</h4>
          {role && <p className="text-sm text-gray-500">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
