import React from "react";
import ContactUs from "../../atoms/ContactUs/ContacUs";
import mailIcone from "../../../assets/mail.svg";
import call from "../../../assets/call.svg";
import location from "../../../assets/location.svg";
import socialLinks from "../../../assets/socialLinks.svg";
<<<<<<< Updated upstream
=======
import ContactCardPatternBlue from "@/app/assets/ContactCardPatternBlue.png";
import ContactCardPatternGray from "@/app/assets/ContactCardPatternGray.png";
import ContactCardPatternOrange from "@/app/assets/ContactCardPatternOrange.png";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

const ContactUsMarge = () => {
  return (
    <>
      <div className="flex flex-col lg:items-start items-center lg:text-left text-center pb-[24px] lg:b-[0px] pt-[50px] lg:pt-0 ">
<<<<<<< Updated upstream
        <p className="inline px-[16px] py-[14px] lg:py-[16.5px] lg:text-[16px] text-[12px] text-[#285260] bg-[#2852600D] rounded-[200px]">
          Reach Out to Us
        </p>
        <h1 className="pt-[16px] pb-[16px] lg:pb-[24px] uppercase text-[#1C1C1E] lg:text-[40px] text-[24px]">
          We’d love to hear from you
=======
        <h1 className="pt-[16px] pb-[16px] lg:pb-[24px] uppercase text-[#1C1C1E] lg:text-[40px] text-[24px] relative">
          We’d love to hear from you
          <div className="bg-[#B4D7D8]/50 sm:w-[167px] sm:block hidden h-[24px] lg:w-[312px] lg:h-[40px] absolute z-[-10] lg:bottom-[14px] bottom-[8px] left-[calc(72%-0px)] lg:left-[445px]"></div>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
        </h1>
        <p className="text-[#3D3D3D] lg:text-[16px] text-[14px]">
          Get in touch with us for any enquiries and questions.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-centre items-center lg:text-left text-center justify-between">
        <ContactUs
          icone={mailIcone}
          title="Write Us"
          text="Our team can respond in real time"
          about="example@gmail.com"
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
          extraWidthClass="w-full lg:w-[57%] xl:w-[66%]"
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
          extraWidthClass="w-full"
          pattern={ContactCardPatternGray}
>>>>>>> Stashed changes
        />

        <ContactUs
          icone={call}
          title="Call Us"
          text="Available during working hours"
          about="+995 599 457 899"
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
          extraWidthClass="w-full lg:w-[73%]"
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
          extraWidthClass="w-full"
          pattern={ContactCardPatternBlue}
>>>>>>> Stashed changes
        />

        <ContactUs
          icone={location}
          title="Visit Us"
          text="Our working time 9:00-19:00"
          about="Lubliana St 12A"
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
          extraWidthClass="w-full lg:w-[80%]"
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
          extraWidthClass="w-full"
          pattern={ContactCardPatternOrange}
>>>>>>> Stashed changes
        />

        <ContactUs
          icone={socialLinks}
          title="Check media"
          text="See our updates right now"
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
          extraClasses="flex gap-[10px] underline mb-[5px]"
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
          aboutFb="Facebook"
          aboutIn="Instagram"
          about="Twitter"
          extraWidthClass="w-full lg:w-[54%] xl:w-[60%]"
        />
      </div>
    </>
  );
};

export default ContactUsMarge;
