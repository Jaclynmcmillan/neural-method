import React from 'react';
import logoImg from '../assets/logo.png'; // ⭐️ Your real logo file

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`${className} flex items-center justify-center relative`}>
      <img 
        src={logoImg} 
        alt="Neural Method Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
