
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
      className={`bg-primary hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default CTAButton;
