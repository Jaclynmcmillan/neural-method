import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="group bg-secondary p-6 sm:p-8 rounded-xl border border-white/5 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,182,255,0.05)] hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
      
      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10 border border-white/5 group-hover:border-accent/30 shadow-lg">
        <Icon className="w-6 h-6" />
      </div>
      
      <h3 className="font-montserrat text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors relative z-10">
        {title}
      </h3>
      
      <p className="text-neutral-light/70 leading-relaxed text-sm relative z-10">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;