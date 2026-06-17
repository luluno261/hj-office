import React from 'react';
export function Eyebrow({
  children,
  className = ''



}: {children: React.ReactNode;className?: string;}) {
  return (
    <div
      className={`inline-flex items-center justify-center rounded-[50px] border border-[#A8A8A8] px-6 py-2 ${className}`}>
      
      <span className="text-[16px] font-semibold uppercase tracking-wider text-teal-900">
        {children}
      </span>
    </div>);

}