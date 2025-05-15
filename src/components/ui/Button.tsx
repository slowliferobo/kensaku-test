import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '',
  children,
  ...props 
}) => {
  const baseStyle = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50';
  
  const variantStyles = {
    primary: 'bg-[#2D6A4F] hover:bg-[#1B4332] text-white focus:ring-[#2D6A4F]',
    secondary: 'bg-[#457B9D] hover:bg-[#1D3557] text-white focus:ring-[#457B9D]',
    outline: 'border border-[#2D6A4F] text-[#2D6A4F] hover:bg-[#2D6A4F] hover:text-white focus:ring-[#2D6A4F]',
    text: 'text-[#2D6A4F] hover:underline focus:ring-[#2D6A4F]'
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  
  return (
    <button 
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};