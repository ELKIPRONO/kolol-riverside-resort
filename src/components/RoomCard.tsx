
import React from 'react';
import { cn } from '@/lib/utils';

interface RoomCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  className?: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
  name,
  description,
  price,
  image,
  features,
  className,
}) => {
  return (
    <div className={cn(
      "bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover-scale",
      className
    )}>
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-serif font-semibold text-resort-dark">{name}</h3>
          <p className="font-serif text-resort-green font-medium">{price}<span className="text-sm font-sans text-resort-brown">/night</span></p>
        </div>
        <p className="text-resort-brown mb-4 text-sm">{description}</p>
        <div className="border-t border-resort-beige pt-4">
          <p className="text-xs uppercase font-medium text-resort-brown mb-2">Room Features</p>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
            {features.map((feature, index) => (
              <li key={index} className="text-sm flex items-center text-resort-dark">
                <span className="w-1.5 h-1.5 bg-resort-green rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
