import React from 'react';
import SuccessIcon from '@/app/assets/Rectangle.png';
import Image from 'next/image';

const Success = () => {
  return (
  <div>
    <Image src={SuccessIcon} alt="Success" />
  </div>
  );
};

export default Success;