
import React from 'react';
import { cn } from '@/lib/utils';

interface AmenityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const AmenityCard: React.FC<AmenityCardProps> = ({
  icon,
  title,
  description,
  className,
}) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center",
      className
    )}>
      <div className="mb-4 text-resort-green">
        {icon}
      </div>
      <h3 className="text-lg font-serif font-medium text-resort-dark mb-2">{title}</h3>
      <p className="text-resort-brown text-sm">{description}</p>
    </div>
  );
};

export default AmenityCard;
