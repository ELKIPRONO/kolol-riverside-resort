
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({
  src,
  alt,
  className,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn(
      "aspect-square overflow-hidden rounded-lg relative cursor-pointer group",
      className
    )}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-resort-cream">
          <div className="w-8 h-8 border-4 border-resort-green border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="absolute inset-0 bg-resort-dark/0 group-hover:bg-resort-dark/20 transition-colors duration-300 flex items-center justify-center">
        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-white text-shadow text-sm font-medium">{alt}</span>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
