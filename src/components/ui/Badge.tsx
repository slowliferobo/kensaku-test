import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'outline';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ 
  variant = 'default', 
  color = 'primary', 
  className = '',
  children 
}) => {
  const baseStyle = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';
  
  const variantStyles = {
    default: {
      primary: 'bg-[#2D6A4F] text-white',
      secondary: 'bg-[#457B9D] text-white',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-amber-100 text-amber-800',
      danger: 'bg-red-100 text-red-800'
    },
    outline: {
      primary: 'border border-[#2D6A4F] text-[#2D6A4F]',
      secondary: 'border border-[#457B9D] text-[#457B9D]',
      success: 'border border-green-500 text-green-700',
      warning: 'border border-amber-500 text-amber-700',
      danger: 'border border-red-500 text-red-700'
    }
  };
  
  return (
    <span className={`${baseStyle} ${variantStyles[variant][color]} ${className}`}>
      {children}
    </span>
  );
};