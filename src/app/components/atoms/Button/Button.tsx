import React from 'react';
import DiagonalArrow from '@/app/assets/DiagonalArrow';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    className = '',
    fullWidth = false
}) => (
    <button
        onClick={onClick}
        className={`  bg-[#CB684D] text-white py-4 px-6 rounded-[16px] flex items-center gap-2 ${fullWidth ? 'w-full justify-center' : ''}${className}
    `}
    >
        {text}
        <div className='flex w-[15px] h-[15px]'>
            <DiagonalArrow />
        </div>
    </button>
);

export default Button;