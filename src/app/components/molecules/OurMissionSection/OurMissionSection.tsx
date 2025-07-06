"use client";

import React from "react";
import MissionImage from "../../atoms/MissionImage/MissionImage";
import { Locale, LocalizedContent } from "@/app/types/type";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface OurMissionSectionProps {
  ourMissionTitle?: LocalizedContent;
  ourMissionImage?: string;
  ourMissionImageSecondary?: string;
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
    transition: { duration: 2, ease: [0.04, 0.62, 0.23, 0.98] as const },
  },
};

const OurMissionSection: React.FC<OurMissionSectionProps> = ({
  ourMissionTitle,
  ourMissionImage,
  ourMissionImageSecondary,
  lang = "en",
}) => {
  const t = useTranslations("Language");

  return (
    <motion.div
      className="w-full md:pt-[80px] md:pb-[50px] mt-[80px] z-[2]"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4 lg:px-[108px] z-[2]">
        <div className="flex flex-col-reverse 2xl:flex-row 2xl:gap-[136px] gap-[32px]">
          {ourMissionImage && (
            <motion.div variants={fadeInUp}>
              <MissionImage
                src={ourMissionImage}
                alt="Luxury space"
                heightClass="2xl:w-[536px] md:h-[280px] h-[184px] flex-shrink-0"
              />
            </motion.div>
          )}

          <motion.div
            className="flex flex-col items-start pr-[100px] w-full lg:w-auto"
            variants={fadeInUp}
          >
            <h2 className="md:text-[48px] text-[24px] pt-4 font-normal leading-[130%]">
              <span className="text-[#1C1C1E] pr-[10px] uppercase">
                {t("Our")}
              </span>
              <span className="text-[#B4B4B4] pr-[10px] uppercase">
                {t("Story")}
              </span>
            </h2>
            <p className="font-normal md:text-[16px] text-[14px] text-[#7E7E7E] leading-[150%] lg:w-[105%] md:w-[115%] w-[120%] pt-[24px]">
              {ourMissionTitle && ourMissionTitle[lang]}
            </p>
          </motion.div>
        </div>

        {ourMissionImageSecondary && (
          <motion.div
            className="md:pt-[40px] pt-[24px] pb-[72px]"
            variants={fadeInUp}
          >
            <MissionImage
              src={ourMissionImageSecondary}
              alt="Reception area"
              heightClass="xl:h-[544px] h-[248px]"
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default OurMissionSection;
