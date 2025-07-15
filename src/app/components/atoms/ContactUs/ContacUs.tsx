import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ContactUsProps {
  title: string;
  text: string;
  icone: string;
  extraClasses?: string;
  extraWidthClass?: string;
  about: string;
  aboutFb?: string;
  aboutIn?: string;
  pattern: StaticImageData;
}

const ContactUs: React.FC<ContactUsProps> = ({
  icone,
  title,
  text,
  aboutFb,
  aboutIn,
  about,
  extraClasses,
  extraWidthClass,
  pattern,
}) => {
  return (
    <>
      <div className="p-4 rounded-[16px] bg-white w-full relative 2xl:h-[230px] xl:h-[210px] lg:h-[250px] md:h-[240px] h-[250px] flex flex-col items-center text-center lg:items-start lg:text-left">
        <Image
          className="lg:m-0 mb-2"
          src={icone}
          alt="contact icon"
          width={40}
          height={40}
        />
        <h3 className="pt-[24px] pb-[8px] lg:text-[24px] text-[20px] text-[#1C1C1E]">
          {title}
        </h3>
        <p
          className={`text-[#8A8A8A] text-[14px] lg:text-[16px] ${extraWidthClass}`}
        >
          {text}
        </p>
        <div
          className={` text-sm 2xl:text-[16px] text-[#285260] font-extrabold ${extraClasses || ''}`}
        >
          {aboutFb && <p>{aboutFb}</p>}
          {aboutIn && <p>{aboutIn}</p>}
          {about && <p>{about}</p>}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[37px] z-10">
          <Image
            src={pattern}
            alt="Card bottom pattern"
            fill
            loading="lazy"
            className="object-cover rounded-b-[16px]"
          />
        </div>
      </div>
    </>
  );
};

export default ContactUs;