import React from "react";
import Input from "../../atoms/SubscribeInput/SubscribeInput";
import Button from "../../atoms/SubscribeButton/SubscribeButton";
import arrowIcon from "@/app/assets/arrow-up-right.svg";

const SubscriptionForm = () => {
  return (
    <div className="flex flex-col items-start pl-[20px] md:pr-[0px] pr-[16px] lg:w-[44%] lg:ml-auto">
      <h2 className="lg:text-[48px] text-[24px] font-normal pb-[32px]">
        Get In Touch
      </h2>
      <div className="font-normal space-y-4">
        <h3>Address: Lubliana Street, 12</h3>
        <h3>Phone number: +995 558 372 845</h3>
        <h3>Email address: +995 558 372 845</h3>
      </div>
    </div>
  );
};

export default SubscriptionForm;