import React from "react";
import ContactUs from "../../atoms/ContactUs/ContacUs";
import mailIcone from "../../../assets/mail.svg";
import call from "../../../assets/call.svg";
import location from "../../../assets/location.svg";
import socialLinks from "../../../assets/socialLinks.svg";
import ContactCardPatternBlue from "@/app/assets/ContactCardPatternBlue.png";
import ContactCardPatternGray from "@/app/assets/ContactCardPatternGray.png";
import ContactCardPatternOrange from "@/app/assets/ContactCardPatternOrange.png";

const ContactUsMarge = () => {
  return (
    <>
      <div className="flex flex-col lg:items-start items-center lg:text-left text-center pb-[24px] lg:b-[0px] pt-[50px] lg:pt-0 ">
        <h1 className="pt-[16px] pb-[16px] lg:pb-[24px] uppercase text-[#1C1C1E] lg:text-[40px] text-[24px] relative">
          We’d love to hear from you
          <div className="bg-[#B4D7D8]/50 sm:w-[167px] sm:block hidden h-[24px] lg:w-[312px] lg:h-[40px] absolute z-[-10] lg:bottom-[14px] bottom-[8px] left-[calc(72%-0px)] lg:left-[445px]"></div>
        </h1>
        <p className="text-[#3D3D3D] lg:text-[16px] text-[14px]">
          Get in touch with us for any enquiries and questions.
        </p>
      </div>
      <div className="grid gap-[24px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full">
        <ContactUs
          icone={mailIcone}
          title="Write Us"
          text="Our team can respond in real time"
          about="example@gmail.com"
          extraWidthClass="w-full"
          pattern={ContactCardPatternGray}
        />

        <ContactUs
          icone={call}
          title="Call Us"
          text="Available during working hours"
          about="+995 599 457 899"
          extraWidthClass="w-full"
          pattern={ContactCardPatternBlue}
        />

        <ContactUs
          icone={location}
          title="Visit Us"
          text="Our working time 9:00-19:00"
          about="Lubliana St 12A"
          extraWidthClass="w-full"
          pattern={ContactCardPatternOrange}
        />

        <ContactUs
          icone={socialLinks}
          title="Check media"
          text="See our updates right now"
          aboutFb="Facebook"
          aboutIn="Instagram"
          about="Twitter"
          extraClasses="flex gap-[10px] underline mb-[5px]"
          extraWidthClass="w-full"
          pattern={ContactCardPatternGray}
        />
      </div>
    </>
  );
};

export default ContactUsMarge;
