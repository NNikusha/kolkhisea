import React from "react";
import Restaurant from "@/app/assets/Restaurant.svg";
import Reception from "@/app/assets/Reception.svg";
import Security from "@/app/assets/Security.svg";
import Gardening from "@/app/assets/Gardening.svg";
import Support from "@/app/assets/Support.svg";
import Image from "next/image";
import Button from "../../atoms/Button/Button";
import OpacityButton from "../../atoms/opacityButton/OpacityButton";
import { WhyUsSectionProps } from "@/app/types/type"; // Import the types
import { useTranslations } from "next-intl";

const MainApartment = "/assets/Main-Apartment.svg";
const defaultImageText = ["quality craftsmanship", "innovative solutions"];

export default function WhyUsSection({
  title,
  image,
  imageText = [],
  lang = 'en'
}: WhyUsSectionProps) {

  const t = useTranslations('Language');

  return (
    <>
      <section>
      <div className="block lg:hidden">
              <h2 className="text-[24px] text-center w-[60%] m-auto sm:w-[100%] lg:text-start lg:text-[48px] leading-[130%] font-medium uppercase text-gray-300 relative bottom-2">
                {t('OUR')}{" "}<br />
                <span className="text-[#1C1C1E]">
                  {t('PROJECT')}  
                </span>
              </h2>
            </div>
        <div className="flex mt-6 lg:mt-5 md:gap-10 2xl:gap-0 flex-col xl:flex-row">
          <div className="order-2 flex-1">
            <div className="hidden lg:flex">
              <h2 className="text-[24px] text-center w-[60%] m-auto sm:w-[100%] lg:text-start lg:text-[80px] leading-[130%] font-medium uppercase text-gray-300 relative bottom-2">
                <p>{t('OUR')}</p>
                <p className="text-[#1C1C1E]">{t('PROJECT')}</p>
              </h2>
            </div>
            <div className="mt-[32px] lg:mt-[30px]">
              <div>
                <h3 className="text-[#7E7E7E]">{t('WhatWeOffer')}</h3>
              </div>
              <div className="mt-5 flex flex-col">
                <div className="flex flex-col items-start sm:flex-row sm:items-center gap-[30px] lg:gap-10">
                  <div className="flex items-center gap-3 w-[100%] sm:w-[237px]">
                    <Image
                      alt="Restaurant"
                      src={Restaurant}
                      className="w-[32px] h-[32px] lg:min-w-[50px] min-w-[28px] min-h-[31px] lg:min-h-[50px]"
                    />
                    <h2 className="text-black text-[14px] w-[50%] sm:w-[100%] lg:text-[16px] ">
                      {t('Restaurant&Bar')}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3 w-[100%] sm:w-[260px]">
                    <Image
                      alt="Reception"
                      src={Reception}
                      className="w-[32px] h-[32px] lg:min-w-[50px] min-w-[28px] min-h-[31px] lg:min-h-[50px]"
                    />
                    <h2 className="text-black text-[14px] w-[110%] sm:w-[100%] lg:text-[16px]">
                      {t('Concierge&Reception')}
                    </h2>
                  </div>
                </div>
                <div className="flex flex flex-col items-start sm:flex-row sm:items-center gap-[30px] mt-[25px] lg:mt-8 lg:gap-10">
                  <div className="flex items-center gap-3 w-[100%] sm:w-[237px]">
                    <Image
                      alt="Security"
                      src={Security}
                      className="w-[32px] h-[32px] lg:min-w-[50px]  lg:min-h-[50px]"
                    />
                    <h2 className="text-black text-[14px] lg:text-[16px]">
                      {t('24/7Security')}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3 w-[100%] sm:w-[237px]">
                    <Image
                      alt="Professional Gardening"
                      src={Gardening}
                      className="w-[32px] h-[32px] lg:min-w-[50px]  lg:min-h-[50px]"
                    />
                    <h2 className="text-black text-[14px] lg:text-[16px] w-[70%] sm:w-[100%] whitespace-wrap lg:whitespace-nowrap">
                      {t('HeatingAndCooling')}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-6 lg:mt-5 w-[100%]">
                    <Image
                      alt="Optional Rental Support"
                      src={Support}
                      className="w-[32px] h-[32px] lg:min-w-[50px]  lg:min-h-[50px]"
                    />
                    <h2 className="text-black text-[14px] lg:text-[16px] w-[70%] sm:w-[100%] whitespace-wrap lg:whitespace-nowrap">
                    {t('OptionalRentalSupport')}
                    </h2>
                  </div>
                <div className="w-full mt-10 lg:w-[290px] lg:mt-4 w-full  m-auto flex justify-center md:justify-start lg:mt-10 lg:m-0 xl:mt-[67px]">
                  <Button
                    className="gap-4 text-center flex justify-center w-full lg:w-auto  items-center"
                    text={t('LearnMore')}
                    href="/about-us"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex-1">
            <div className="flex items-start">
              <p className="text-[#3D3D3D] font-medium leading-[150%] text-[14px] lg:text-[16px] md:mt-6 xl:mt-0 text-[#3D3D3D] text-center lg:text-start">
                {title && title[lang] ? title[lang] : "We are a leading construction company dedicated to delivering high-quality residential and commercial projects. With years of experience and a passion for excellence, we create spaces that stand the test of time. Whether you're looking to build, renovate, or invest, we’re here to make it happen."}
              </p>
            </div>
            <div className="w-full h-[288px] lg:h-[375px] 2xl:h-[384px] 2xl:w-[648px] mt-10 relative">
            <div className="w-full h-full overflow-hidden rounded-[48px] relative">
            <Image
              alt="Why Us Image"
              src={image || MainApartment}
              fill
              sizes="100vw"
              quality={100}
              className="rounded-[48px] object-cover"
              priority
            />
          </div>
              <div className="hidden 2xl:flex gap-4 w-full absolute bottom-10 left-4">
                <OpacityButton
                  text={imageText && imageText[0] ? imageText[0][lang] : defaultImageText[0] || ''}
                  className="mt-10 bg-white/0 rounded-[48px] px-6 py-3 text-center justify-center"
                />
                <OpacityButton
                  text={imageText && imageText[1] ? imageText[1][lang] : defaultImageText[1] || ''}
                  className="hidden 2xl:flex mt-10 bg-white/0 rounded-[48px] px-6 py-3"
                />

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
