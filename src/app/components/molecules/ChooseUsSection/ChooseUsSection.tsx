"use client";

import React from "react";
import ChooseUsCard from "../ChooseUsCard/ChooseUsCard";
import { Locale, LocalizedContent } from "@/app/types/type";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface ChooseUsItem {
  title: LocalizedContent;
  why_choose_us: LocalizedContent;
  image_url: string;
}

interface ChooseUsSectionProps {
  whyChooseUs?: ChooseUsItem[];
  whyChooseUsText?: LocalizedContent;
  lang?: Locale;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.04, 0.62, 0.23, 0.98] as const },
  },
};

const ChooseUsSection: React.FC<ChooseUsSectionProps> = ({
  whyChooseUs,
  whyChooseUsText,
  lang = "en",
}) => {
  const t = useTranslations("Language");

  if (!whyChooseUs || whyChooseUs.length === 0) {
    return null;
  }

  const transformedData = whyChooseUs.map((item, index) => ({
    number: `0${index + 1}`,
    title: item.title[lang] || "",
    description: item.why_choose_us[lang] || "",
    imageSrc: item.image_url,
  }));

  return (
    <motion.div
      className="w-full pt-[168px] pb-[72px] md:pb-[100px]"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 xl:px-[108px]">
        <motion.div
          className="flex xl:flex-row flex-col pb-[72px] xl:text-start text-center"
          variants={fadeInUp}
        >
          <h2 className="2xl:text-[48px] xl:text-[36px] text-[24px] font-normal leading-[130%] xl:pr-[106px] pr-[0px]">
            <span className="text-[#ABABAB] uppercase pr-4">{t("Why")}</span>
            <span className="text-[#CB684D] uppercase">{t("Kobuleti")}?</span>
          </h2>

          {whyChooseUsText && whyChooseUsText[lang] && (
            <p className="font-normal xl:text-[16px] text-[14px] text-[#3D3D3D] leading-[150%] xl:w-[95%] xl:pt-[0px] pt-[24px]">
              {whyChooseUsText[lang]}
            </p>
          )}
        </motion.div>

        <motion.div
          className="flex lg:flex-row flex-col items-center justify-between 2xl:gap-[24px] xl:gap-[26px] gap-[24px] lg:mb-[100px]"
          variants={containerVariants}
        >
          {transformedData.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <ChooseUsCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ChooseUsSection;
