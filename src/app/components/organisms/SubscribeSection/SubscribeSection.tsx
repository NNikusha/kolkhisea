import React from 'react';
import Image from 'next/image';
import SubscriptionForm from '../../molecules/SubscriptionForm/SubscriptionForm';
import SubscribeProject from '@/app/assets/Subscribe-Project.svg'

export default function SubscribeSection() {
  return (
    <div className="relative w-full h-[110vh] flex flex-col  justify-center  space-y-6">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image 
          src={SubscribeProject}
          alt="Subscription Background"
          layout="fill"
          className="rounded-b-[60px] object-cover 2xl:object-fill"
        />
      </div>

      <div className="relative z-10  ">
        <div>
          <SubscriptionForm />
        </div>
      </div>
    </div>
  );
}
