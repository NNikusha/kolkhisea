"use client";
import React from 'react';
import { Locale } from '@/app/types/type';

interface ContactPageElipseButtonsProps {
  titles?: Array<{
    title: string;
    ka: string;
    en: string;
    ru: string;
  }>;
  lang?: Locale;
}

const ContactPageElipseButtons = ({ 
  titles = [], 
  lang = 'en' 
}: ContactPageElipseButtonsProps) => {
  const buttonStyles = {
    base: "absolute cursor-pointer hidden lg:block uppercase leading-[1.3] text-[16px] text-white py-[24px] px-[16px] rounded-[16px] bg-[#F4EDE633]/20 z-21 backdrop-blur-[8.6px]",
    boxShadow: "inset 0 0 25px rgba(255, 255, 255, 0.3)"
  };

  const positions = [
    "lg:left-[-70px] lg:bottom-[-150px] xl:left-[30px] xl:bottom-[-140px] 2xl:left-[150px] 2xl:bottom-[-100px]",
    "lg:left-[-90px] lg:bottom-[400px] xl:left-[0px] xl:bottom-[410px] 2xl:left-[10px] 2xl:bottom-[410px]",
    "lg:right-[-90px] lg:bottom-[295px] xl:right-[0px] xl:bottom-[340px] 2xl:right-[70px] 2xl:bottom-[350px]",
    "lg:right-[-70px] lg:bottom-[-70px] xl:right-[0px] xl:bottom-[-100px] 2xl:right-[130px] 2xl:bottom-[-38px]"
  ];

  if (!titles || titles.length === 0) {
    return null;
  }

  return (
    <div>
      {titles.map((titleData, index) => (
        <button
          key={index}
          className={`${buttonStyles.base} ${positions[index] || ''}`}
          style={{ boxShadow: buttonStyles.boxShadow }}
        >
          {titleData[lang]}
        </button>
      ))}
    </div>
  );
};

export default ContactPageElipseButtons;