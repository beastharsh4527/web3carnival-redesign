import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href,
  ...props 
}: ButtonProps) {
  
  const baseClasses = 'inline-flex items-center justify-center font-sans whitespace-nowrap transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent-light)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]';
  
  const variants = {
    primary: 'bg-white text-black border border-white hover:bg-transparent hover:text-white',
    secondary: 'bg-transparent text-white border border-[var(--border)] hover:bg-white hover:text-black hover:border-white',
    outline: 'border border-[var(--border)] bg-transparent text-white hover:bg-white hover:text-black hover:border-white',
  };
  
  const sizes = {
    sm: 'px-4 py-3 text-[11px] min-h-[44px]',
    md: 'px-6 py-4 text-[11px] min-h-[44px]',
    lg: 'px-8 py-5 text-small min-h-[44px]',
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    // If it starts with http, render a standard anchor
    if (href.startsWith('http')) {
      return (
        <a href={href} className={combinedClasses} target={props.target} rel={props.rel}>
          {children}
        </a>
      );
    }
    // Otherwise use Next.js Link
    return (
      <Link href={href} className={combinedClasses} target={props.target} rel={props.rel}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
