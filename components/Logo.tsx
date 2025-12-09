import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`${className} flex items-center justify-center relative`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="" 
        className="w-full h-full overflow-visible"
        aria-label="Neural Method Logo"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        <g filter="url(#glow)">
          {/* Left Hemisphere */}
          <path d="M45 20C35 20 25 25 22 35C18 45 20 60 22 70C25 80 35 85 45 85" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          
          {/* Right Hemisphere */}
          <path d="M55 20C65 20 75 25 78 35C82 45 80 60 78 70C75 80 65 85 55 85" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          
          {/* Pulse Line */}
          <path d="M5 52.5H25L32 38L42 68L50 52.5H65" stroke="#38B6FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          
          {/* Circuit Elements */}
          <circle cx="65" cy="52.5" r="3" fill="#38B6FF" />
          <circle cx="78" cy="35" r="3" fill="#38B6FF" />
          <circle cx="75" cy="70" r="3" fill="#38B6FF" />
          
          {/* Connections */}
          <path d="M65 52.5L78 35" stroke="#38B6FF" strokeWidth="1.5" strokeOpacity="0.8"/>
          <path d="M65 52.5L75 70" stroke="#38B6FF" strokeWidth="1.5" strokeOpacity="0.8"/>
        </g>
      </svg>
    </div>
  );
};

export default Logo;