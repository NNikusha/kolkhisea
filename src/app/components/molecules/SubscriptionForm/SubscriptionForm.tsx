import React from "react";
import Input from "../../atoms/SubscribeInput/SubscribeInput";
import Button from "../../atoms/SubscribeButton/SubscribeButton";
import arrowIcon from "@/app/assets/arrow-up-right.svg";

const SubscriptionForm = () => {
  return (
    <div className="flex flex-col items-start pl-[20px] md:pr-[0px] pr-[16px] lg:w-[44%] lg:ml-auto">
      <h2 className="text-white lg:text-[48px] text-[24px] font-normal leading-[130%] lg:w-[50%] w-[60%] pb-[32px]">
        Subscribe to project updates
      </h2>
      <h3 className="font-normal">Email</h3>
      <Input placeholder="" />
      <p className="text-white pb-[40px] font-normal pt-[8px] leading-[150%] lg:w-[50%] text-[16px] ">
        By clicking &apos;Subscribe,&apos; you confirm your consent to the
        processing of personal data and receiving promotional emails.
      </p>
      <Button text="Subscribe" iconSrc={arrowIcon} />
    </div>
  );
};

export default SubscriptionForm;