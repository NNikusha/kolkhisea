"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactUs from "../../atoms/ContactUs/ContacUs";
import mailIcone from "../../../assets/mail.svg";
import call from "../../../assets/call.svg";
import location from "../../../assets/location.svg";
import socialLinks from "../../../assets/socialLinks.svg";
import ContactCardPatternBlue from "@/app/assets/ContactCardPatternBlue.png";
import ContactCardPatternGray from "@/app/assets/ContactCardPatternGray.png";
import ContactCardPatternOrange from "@/app/assets/ContactCardPatternOrange.png";
import { Locale, LocalizedContent } from '@/app/types/type';

const itemVariants = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.42, 0, 0.58, 1] },
  },
});

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
        <motion.h1
          className="pt-[16px] pb-[16px] lg:pb-[24px] uppercase text-[#1C1C1E] lg:text-[40px] text-[24px] relative"
          variants={itemVariants(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {title?.[lang]}
          <div className="bg-[#B4D7D8]/50 sm:w-[167px] sm:block hidden h-[24px] lg:w-[312px] lg:h-[40px] absolute z-[-10] lg:bottom-[14px] bottom-[8px] left-[calc(72%-0px)] lg:left-[245px]"></div>
        </motion.h1>
        <motion.p
          className="text-[#3D3D3D] lg:text-[16px] text-[14px]"
          variants={itemVariants(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {secondaryTitle?.[lang]}
        </motion.p>
      </div>
      <div className="grid gap-[24px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full">
        <motion.div
          variants={itemVariants(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ContactUs
            icone={mailIcone}
            title={writeUsTitle?.[lang] || ''}
            text={writeUsSubtitle?.[lang] || ''}
            about={writeUsExtra?.[lang] || ''}
            extraWidthClass="w-full"
            pattern={ContactCardPatternGray}
          />
        </motion.div>
        <motion.div
          variants={itemVariants(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ContactUs
            icone={call}
            title={callUsTitle?.[lang] || ''}
            text={callUsSubtitle?.[lang] || ''}
            about={callUsExtra?.[lang] || ''}
            extraWidthClass="w-full"
            pattern={ContactCardPatternBlue}
          />
        </motion.div>
        <motion.div
          variants={itemVariants(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ContactUs
            icone={location}
            title={visitUsTitle?.[lang] || ''}
            text={visitUsSubtitle?.[lang] || ''}
            about={visitUsExtra?.[lang] || ''}
            extraWidthClass="w-full"
            pattern={ContactCardPatternOrange}
          />
        </motion.div>
        <motion.div
          variants={itemVariants(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
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
        </motion.div>
      </div>
    </>
  );
};

export default ContactUsMarge;