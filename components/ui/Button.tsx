import React from 'react';
import { ArrowUpRight } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: boolean;
  variant?: 'solid' | 'outline';
}
export function Button({
  children,
  icon = true,
  variant = 'solid',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-[30px] px-6 py-3 text-[14px] font-bold uppercase transition-colors';
  const variants = {
    solid: 'bg-gold text-white hover:bg-gold/90',
    outline:
    'border border-darker text-darker hover:bg-darker hover:text-white'
  };
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}>
      
      {children}
      {icon && <ArrowUpRight className="h-4 w-4" />}
    </button>);

}