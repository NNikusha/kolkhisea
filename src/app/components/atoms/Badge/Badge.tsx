import React from 'react';

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, className = '' }) => (
  <div className={`px-4 py-2 rounded-full font-medium text-sm w-fit text-[#285260] bg-[#285260]/5 ${className}`}>
    {text}
  </div>
);

export default Badge;