"use client";
import React from "react";
import ContactUs from "../../atoms/ContactUs/ContacUs";
import mailIcone from "../../../assets/mail.svg";
import call from "../../../assets/call.svg";
import location from "../../../assets/location.svg";
import socialLinks from "../../../assets/socialLinks.svg";
import ContactCardPatternBlue from "@/app/assets/ContactCardPatternBlue.png";
import ContactCardPatternGray from "@/app/assets/ContactCardPatternGray.png";
import ContactCardPatternOrange from "@/app/assets/ContactCardPatternOrange.png";
import { Locale, LocalizedContent } from '@/app/types/type';
import AnimateOnScroll from "../../atoms/AnimateOnScroll/AnimateOnScroll";

interface ContactUsMargeProps {
  title?: LocalizedContent;
  secondaryTitle?: LocalizedContent;
  writeUsTitle?: LocalizedContent;
  writeUsSubtitle?: LocalizedContent;
  writeUsExtra?: LocalizedContent;
  callUsTitle?: LocalizedContent;
  callUsSubtitle?: LocalizedContent;
  callUsExtra?: LocalizedContent;
  visitUsTitle?: LocalizedContent;
  visitUsSubtitle?: LocalizedContent;
  visitUsExtra?: LocalizedContent;
  socialLinkTitle?: LocalizedContent;
  socialLinkSubtitle?: LocalizedContent;
  socialLinkExtra?: LocalizedContent | null;
  lang?: Locale;
}

const ContactUsMarge = ({
  title,
  secondaryTitle,
  writeUsTitle,
  writeUsSubtitle,
  writeUsExtra,
  callUsTitle,
  callUsSubtitle,
  callUsExtra,
  visitUsTitle,
  visitUsSubtitle,
  visitUsExtra,
  socialLinkTitle,
  socialLinkSubtitle,
  lang = 'en'
}: ContactUsMargeProps) => {
  return (
    <>
      <div className="flex flex-col lg:items-start items-center lg:text-left text-center pb-[24px] lg:b-[0px] pt-[50px] lg:pt-0 ">
        <AnimateOnScroll delay={0} from="up">
          <h1 className="pt-[16px] pb-[16px] lg:pb-[24px] uppercase text-[#1C1C1E] lg:text-[40px] text-[24px] relative">
            {title?.[lang]}
            <div className="bg-[#B4D7D8]/50 sm:w-[167px] sm:block hidden h-[24px] lg:w-[312px] lg:h-[40px] absolute z-[-10] lg:bottom-[14px] bottom-[8px] left-[calc(72%-0px)] lg:left-[245px]"></div>
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.15} from="up">
          <p className="text-[#3D3D3D] lg:text-[16px] text-[14px]">
            {secondaryTitle?.[lang]}
          </p>
        </AnimateOnScroll>
      </div>
      <div className="grid gap-[24px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full">
        <AnimateOnScroll delay={0} from="up">
          <ContactUs
            icone={mailIcone}
            title={writeUsTitle?.[lang] || ''}
            text={writeUsSubtitle?.[lang] || ''}
            about={writeUsExtra?.[lang] || ''}
            extraWidthClass="w-full"
            pattern={ContactCardPatternGray}
          />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.15} from="up">
          <ContactUs
            icone={call}
            title={callUsTitle?.[lang] || ''}
            text={callUsSubtitle?.[lang] || ''}
            about={callUsExtra?.[lang] || ''}
            extraWidthClass="w-full"
            pattern={ContactCardPatternBlue}
          />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.3} from="up">
          <ContactUs
            icone={location}
            title={visitUsTitle?.[lang] || ''}
            text={visitUsSubtitle?.[lang] || ''}
            about={visitUsExtra?.[lang] || ''}
            extraWidthClass="w-full"
            pattern={ContactCardPatternOrange}
          />
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.45} from="up">
          <ContactUs
            icone={socialLinks}
            title={socialLinkTitle?.[lang] || ''}
            text={socialLinkSubtitle?.[lang] || ''}
            aboutFb="Facebook"
            aboutIn="Instagram"
            about="Twitter"
            extraClasses="flex gap-[10px] underline mb-[5px]"
            extraWidthClass="w-full"
            pattern={ContactCardPatternGray}
          />
        </AnimateOnScroll>
      </div>
    </>
  );
};

export default ContactUsMarge;