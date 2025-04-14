import React from 'react';
import Image from 'next/image';
import SubscriptionForm from '../../molecules/SubscriptionForm/SubscriptionForm';
import GetInTouchImage from "@/app/assets/GetInTouchImage.svg";

export default function SubscribeSection() {
  return (
    <div className="relative w-full h-[252px] md:h-[363px] flex flex-col justify-center space-y-6">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image 
          src={GetInTouchImage}
          alt="Subscription Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10">
        <div>
          <SubscriptionForm />
        </div>
      </div>
    </div>
  );
}