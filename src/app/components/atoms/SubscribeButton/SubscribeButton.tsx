import React from "react";
import Image from "next/image";

interface SubscribeButtonProps {
  text: string;
  onClick?: () => void;
  iconSrc?: string;
}

const SubscribeButton: React.FC<SubscribeButtonProps> = ({ text, onClick, iconSrc }) => {
  return (
    <button
      onClick={onClick}
      className="sm:w-[164px] w-full lg:text-[16px] text-[14px] relative cursor-pointer bg-[#CB684D] text-white font-medium flex items-center justify-center gap-4 py-4 px-8 rounded-[16px] overflow-hidden transition-transform duration-300 group"
    >
      <span className="relative z-10 text-center sm:text-left">{text}</span>
      {iconSrc && <Image src={iconSrc} alt="icon" width={20} height={20} />}
      
      <div className="absolute inset-0 bg-[radial-gradient(30%_50%_at_50%_90%,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </button>
  );
};

export default SubscribeButton;