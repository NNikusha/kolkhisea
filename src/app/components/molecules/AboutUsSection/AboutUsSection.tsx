"use client";

import React from "react";
import { motion } from "framer-motion";
import DownScroll from "@/app/assets/DownScroll.svg";
import DownScrollArrow from "@/app/assets/DownScrollArrow.svg";
import MainParagraph from "../../atoms/mainParagraph/MainParagraph";
import MainHeadLine from "../../atoms/MainHeadLine/mainHeadLine";
import DownScrollAnimation from "../../molecules/downScrollAnimation/DownScrollAnimation";
import Header from "../../organisms/header/Header";
import { Locale, LocalizedContent } from "@/app/types/type";
import { useTranslations } from "next-intl";

interface AboutUsSectionProps {
  titleSecondary?: LocalizedContent;
  mainImage?: string;
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
    transition: { duration: 1.5, ease: [0.04, 0.62, 0.23, 0.98] as const },
  },
};

export default function AboutUsSection({
  titleSecondary,
  mainImage,
  lang = "en",
}: AboutUsSectionProps) {
  const t = useTranslations("Language");

  return (
    <>
      <Header dynamicImage={mainImage || ""} />

      <motion.section
        className="container px-[20px] lg:px-[108px] mx-auto mt-[146px] xl:mt-[200px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* <motion.div variants={fadeInUp} className="flex justify-center w-full">
          <button className="bg-[#FFFFFF0D] text-[#FFFFFF] px-[16px] py-[16px] rounded-full mb-[40px]">
            {t("AboutUsButton")}
          </button>
        </motion.div> */}

        <motion.div variants={fadeInUp}>
          <MainHeadLine
            className="text-center"
            width="max-w-[58%]"
            centered={true}
            firstText={t("BuildingTheFuture")}
            secondText={t("WithExcellence")}
            firstTextColor="#ffffff6e"
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <MainParagraph
            paragraph={
              titleSecondary && titleSecondary[lang]
                ? titleSecondary[lang]
                : t("DefaultAboutUsText")
            }
            centered={true}
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <DownScrollAnimation
            DownScroll={DownScroll}
            DownScrollArrow={DownScrollArrow}
          />
        </motion.div>
      </motion.section>
    </>
  );
}
