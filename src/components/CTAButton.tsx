
import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const CTAButton = ({ children, onClick, className = "" }: CTAButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative bg-gradient-to-r from-blue-600 to-blue-700 
        hover:from-blue-500 hover:to-blue-600 
        text-white font-bold py-4 px-8 rounded-xl text-lg 
        transition-all duration-300 
        hover:scale-105 hover:shadow-2xl 
        shadow-lg hover:shadow-blue-500/25
        border border-blue-500/50 hover:border-blue-400
        overflow-hidden group
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default CTAButton;
