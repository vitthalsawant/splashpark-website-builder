
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
  className?: string;
  onSetFavorite?: () => void;
  isFavorite?: boolean;
}

const ActivityCard = ({ 
  title, 
  description, 
  image,
  path,
  className,
  onSetFavorite,
  isFavorite = false
}: ActivityCardProps) => {
  return (
    <motion.div 
      className={cn(
        "overflow-hidden rounded-2xl shadow-lg group transition-all duration-500 h-full",
        className
      )}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="relative h-full flex flex-col">
        <div className="relative h-72 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
          
          {onSetFavorite && (
            <button 
              onClick={(e) => {
                e.preventDefault();
                onSetFavorite();
              }}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart 
                size={20} 
                className={cn(
                  "transition-colors",
                  isFavorite ? "fill-red-500 text-red-500" : "text-white"
                )} 
              />
            </button>
          )}
        </div>
        
        <div className="relative p-6 flex flex-col flex-grow bg-white">
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600 mb-6 flex-grow">{description}</p>
          <Link to={path}>
            <Button className="w-full bg-aqua-600 hover:bg-aqua-700">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityCard;
