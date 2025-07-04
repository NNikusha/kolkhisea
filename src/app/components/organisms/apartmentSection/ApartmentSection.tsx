"use client";

import React from "react";
import DownScroll from "@/app/assets/DownScroll.svg";
import DownScrollArrow from "@/app/assets/DownScrollArrow.svg";
import OpacityButton from "../../atoms/opacityButton/OpacityButton";
import MainParagraph from "../../atoms/mainParagraph/MainParagraph";
import MainHeadLine from "../../atoms/MainHeadLine/mainHeadLine";
import ArrowRight from "@/app/assets/arrow-up-right.svg";
import DownScrollAnimation from "../../molecules/downScrollAnimation/DownScrollAnimation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { ApartmentSectionProps } from "@/app/types/type";
import Header from "../header/Header";
import { motion } from "framer-motion";

export default function ApartmentSection({
  secondaryTitle,
  mainImg 
}: ApartmentSectionProps) {
  const t = useTranslations('Language');
  const locale = useLocale() as 'en' | 'ka' | 'ru';

  return (
    <>
      <Header dynamicImage={mainImg} />
      <section className="container px-[20px] lg:px-[108px] mx-auto mt-[146px] xl:mt-[200px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <MainHeadLine
            firstText={t('InspiredByThePastBuiltF')}
            secondText={t('RtheFuture')}
          />
        </motion.div>
        {secondaryTitle && secondaryTitle[locale] && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <MainParagraph
              paragraph={secondaryTitle[locale]}
              centered={false}
            />
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <OpacityButton
            text={t('DiscoverKolkhiSea')}
            image={ArrowRight}
            href="/about-project"
          />
        </motion.div>
     
          <DownScrollAnimation
            DownScroll={DownScroll}
            DownScrollArrow={DownScrollArrow}
          />
      </section>
    </>
  );
}
