import React from 'react';
import Input from '../../atoms/SubscribeInput/SubscribeInput';
import Button from '../../atoms/SubscribeButton/SubscribeButton';
import arrowIcon from '@/app/assets/arrow-up-right.svg'

const SubscriptionForm = () => {
  return (
    <div className="flex flex-col items-start pl-[20px] w-[44%] ml-auto">
      <h2 className="text-white text-[48px] font-normal leading-[130%] w-[50%] pb-[32px]">Subscribe to project updates</h2>
      <h3 className='font-normal'>Email</h3>
      <Input placeholder="Enter your email" />
      <p className="text-white pb-[40px] font-normal leading-[150%] w-[50%] text-[16px] ">
        By clicking 'Subscribe,' you confirm your consent to the processing of personal data and receiving promotional emails.
      </p>
      <Button text="Subscribe" iconSrc={arrowIcon} />
    </div>
  );
};

export default SubscriptionForm;