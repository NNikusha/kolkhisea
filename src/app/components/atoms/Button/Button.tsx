import React from 'react';
import Link from 'next/link';
import DiagonalArrow from '@/app/assets/DiagonalArrow';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
  href?: string; 
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = '',
  fullWidth = false,
  href,
  disabled, 
}) => {
  const buttonClasses = `relative cursor-pointer bg-[#CB684D] text-white py-4 px-6 rounded-[16px] flex items-center gap-2 transition-transform duration-300 group ${fullWidth ? 'w-full justify-center' : ''} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{text}</span>
      <div className='relative z-10 flex w-[15px] h-[15px]'>
        <DiagonalArrow />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(30%_50%_at_50%_90%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled} 
    >
      {content}
    </button>
  );
};

export default Button;
