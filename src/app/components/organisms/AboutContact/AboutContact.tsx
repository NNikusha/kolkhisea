
import React from "react";
import DownScroll from "@/app/assets/DownScroll.svg";
import DownScrollArrow from "@/app/assets/DownScrollArrow.svg";
import MainApartment from "@/app/assets/Main-Apartment.svg";
import DownScrollAnimation from "../../molecules/downScrollAnimation/DownScrollAnimation";
import Header from "../../organisms/header/Header";
import Elipse from "@/app/assets/Elipse";
import faceIcon from "../../../assets/faceIcone.svg";
import Image from "next/image";
import ContactUsMarge from "../../molecules/ContactUsMarge/ContactUsMarge";
import GoogleMap from "../../molecules/GoogleMap/GoogleMap";
import MainHeadLineAnimation from "../../atoms/MainHeadLineAnimation/MainHeadLineAnimation";
import ContactPageElipseButtons from "../../atoms/ContactPageElipseButtons/ContactPageElipseButtons";
import { fetchContactPage } from '@/app/hooks/axios';
import { getLocale } from 'next-intl/server';
import { Locale } from '@/app/types/type';
import AnimateOnScroll from "../../atoms/AnimateOnScroll/AnimateOnScroll";

const AboutContact = async () => {
  const locale = await getLocale() as Locale;
  const data = await fetchContactPage();

  return (
    <>
      <Header dynamicImage={MainApartment || ''} />
<section className="container px-[16px] lg:px-[108px] mx-auto z-[-1]">
        <div className="relative flex flex-col justify-center items-center">
          <div className="mt-[200px] lg:mt-[300px] flex flex-col justify-center items-center">
            <div
              className="hidden lg:block absolute lg:bottom-[-100px] xl:bottom-[-75px] 2xl:bottom-[-60px]"
              style={{ zIndex: 20 }}
            >
              <Elipse />
            </div>
              <ContactPageElipseButtons 
                titles={data?.titles}
                lang={locale}
              />
            <AnimateOnScroll delay={0.1} from="up">
              <div className="flex justify-center w-full">
                <button className="bg-[#FFFFFF0D] text-[#FFFFFF] px-[16px] py-[16px] rounded-full mb-[16px] lg:mb-[0px]">
                  Contact us
                </button>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} from="up">
              <MainHeadLineAnimation />
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3} from="up">
              <div className="flex justify-start items-center gap-2 pb-[24px]">
                <Image
                  className=""
                  src={faceIcon}
                  width={224}
                  height={80}
                  alt="faceIcone"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
        <AnimateOnScroll delay={0.4} from="up">
          <DownScrollAnimation
            DownScroll={DownScroll}
            DownScrollArrow={DownScrollArrow}
          />
        </AnimateOnScroll>
      </section>
      <div className="relative">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          {/* <BackGroundLine6 className="absolute bottom-[10%] w-full h-auto max-w-none z-[-10]" />
          <BackGroundLine7 className="absolute top-[8%] w-full h-auto max-w-none z-[-10]" /> */}
        </div>

        <div className="container px-[16px] lg:px-[108px] mx-auto mt-[350px] sm:mt-[600px] xl:mt-[400px] my-[200px] pt-[112px]">
          <ContactUsMarge 
          title={data?.title}
          secondaryTitle={data?.secondary_title}
          writeUsTitle={data?.write_us_title}
          writeUsSubtitle={data?.write_us_subtitle}
          writeUsExtra={data?.write_us_extra}
          callUsTitle={data?.call_us_title}
          callUsSubtitle={data?.call_us_subtitle}
          callUsExtra={data?.call_us_extra}
          visitUsTitle={data?.visit_us_title}
          visitUsSubtitle={data?.visit_us_subtitle}
          visitUsExtra={data?.visit_us_extra}
          socialLinkTitle={data?.social_link_title}
          socialLinkSubtitle={data?.social_link_subtitle}
          socialLinkExtra={data?.social_link_extra}
          lang={locale}
          />
          <GoogleMap />
        </div>
      </div>
    </>
  );
};

export default AboutContact;