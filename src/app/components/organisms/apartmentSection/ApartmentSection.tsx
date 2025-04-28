"use client";

import React from "react";
import Header from "../header/Header";
import DownScroll from "@/app/assets/DownScroll.svg";
import DownScrollArrow from "@/app/assets/DownScrollArrow.svg";
import MainApartment from "@/app/assets/Main-Apartment.svg";
import MobileMainApartment from "@/app/assets/MobileMainImageKolkhi.svg";
import OpacityButton from "../../atoms/opacityButton/OpacityButton";
import MainParagraph from "../../atoms/mainParagraph/MainParagraph";
import MainHeadLine from "../../atoms/MainHeadLine/mainHeadLine";
import ArrowRight from "@/app/assets/arrow-up-right.svg";
import ModalInfo from "../../molecules/modalInfo/ModalInfo";
import DownScrollAnimation from "../../molecules/downScrollAnimation/DownScrollAnimation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { ApartmentSectionProps } from "@/app/types/type";


export default function ApartmentSection({
  secondaryTitle,
  cloudText,
  cloudTextSecondary
}: ApartmentSectionProps) {
  const t = useTranslations('Language');
  const locale = useLocale() as 'en' | 'ka' | 'ru';

  return (
    <>
      <Header
        mainImage={MainApartment}
        mobileMainImage={MobileMainApartment}
      />
      <section className="container px-[20px] lg:px-[150px] mx-auto mt-[146px] xl:mt-[200px]">
        <MainHeadLine
          firstText={t('InspiredByThePastBuiltF')}
          secondText={t('RtheFuture')}
        />
        {secondaryTitle && secondaryTitle[locale] && (
          <MainParagraph
            paragraph={secondaryTitle[locale]}
            centered={false}
          />
        )}
        
        <OpacityButton
          text={t('DiscoverKolkhiSea')}
          image={ArrowRight}
          href="/about-project"
        />
        
        <ModalInfo 
          cloudText={cloudText} 
          cloudTextSecondary={cloudTextSecondary}
          lang={locale}
        />
        
        <DownScrollAnimation
          DownScroll={DownScroll}
          DownScrollArrow={DownScrollArrow}
        />
      </section>
    </>
  );
}