
import { Check } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  className?: string;
}

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features,
  popular = false,
  className 
}: PricingCardProps) => {
  return (
    <div 
      className={cn(
        "rounded-2xl p-6 md:p-8 transition-all h-full flex flex-col",
        popular 
          ? "bg-aqua-50 border-2 border-aqua-500 shadow-xl shadow-aqua-100 scale-[1.02]" 
          : "bg-white border border-gray-200 shadow-lg",
        className
      )}
    >
      {popular && (
        <div className="bg-aqua-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full w-fit -mt-12 mb-4 mx-auto">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-6">
        <span className="text-3xl font-bold">${price}</span>
        <span className="text-gray-500">/person</span>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className="text-aqua-500 flex-shrink-0 mr-2 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={popular 
          ? "bg-aqua-600 hover:bg-aqua-700 text-white shadow-md"
          : "bg-gray-900 hover:bg-gray-800 text-white"
        }
      >
        Book Now
      </Button>
    </div>
  );
};

export default PricingCard;
