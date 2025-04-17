
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div className={cn(
      'mb-12',
      centered ? 'text-center' : 'text-left',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-serif font-medium text-resort-dark mb-3">{title}</h2>
      {subtitle && (
        <p className="text-resort-brown max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={cn(
        'h-px bg-resort-green w-20 mt-5',
        centered ? 'mx-auto' : ''
      )}></div>
    </div>
  );
};

export default SectionTitle;
