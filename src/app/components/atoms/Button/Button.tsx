import React from 'react';
import DiagonalArrow from '@/app/assets/DiagonalArrow';

const Button = ({ text }:any) => (
  <button className="bg-[#CB684D] text-white py-4 px-6 rounded-[16px] flex items-center gap-2">
    {text}
    <div className='flex w-[15px] h-[15px]'>
      <DiagonalArrow />
    </div>
  </button>
);

export default Button;