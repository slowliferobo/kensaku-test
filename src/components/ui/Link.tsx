import React, { AnchorHTMLAttributes } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  className = '', 
  children,
  ...props 
}) => {
  return (
    <a 
      href={href} 
      className={`font-medium ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};