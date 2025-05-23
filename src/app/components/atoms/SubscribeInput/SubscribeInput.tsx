import React from 'react';

interface SubscribeInputProps {
  placeholder: string;
}

const SubscribeInput: React.FC<SubscribeInputProps> = ({ placeholder }) => {
  return (
    <input 
      type="email"
      placeholder={placeholder}  
      className="sm:w-[424px] w-full lg:px-28 py-4 pb-[8px] rounded-lg bg-[#FFFFFF80] focus:outline-none"
    />
  );
};

export default SubscribeInput;