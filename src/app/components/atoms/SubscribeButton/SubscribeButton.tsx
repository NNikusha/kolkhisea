import React from 'react';
import Image from 'next/image';

interface SubscribeButtonProps {
  text: string;
  onClick?: () => void;
  iconSrc?: string;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({ text, onClick, iconSrc }) => {
  return (
    <button 
      onClick={onClick}
      className="bg-[#CB684D] text-white flex items-center gap-4 px-[24px] py-[20px] rounded-[16px]"
    >
      {text}
      {iconSrc && <Image src={iconSrc} alt="icon" width={20} height={20} />}
    </button>
  );
};

export default SubscribeButton;