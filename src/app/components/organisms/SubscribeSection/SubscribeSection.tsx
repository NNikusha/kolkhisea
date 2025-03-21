import React from 'react';
import Image from 'next/image';
import SubscriptionForm from '../../molecules/SubscriptionForm/SubscriptionForm';
import FooterPhoto from "@/app/assets/footerphoto.svg";

export default function SubscribeSection() {
  return (
    <div className="relative w-full h-[444px] md:h-[556px] flex flex-col justify-center space-y-6">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image 
          src={FooterPhoto}
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