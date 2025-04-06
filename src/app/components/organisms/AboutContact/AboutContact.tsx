"use client";
import React from "react";
import DownScroll from "@/app/assets/DownScroll.svg";
import DownScrollArrow from "@/app/assets/DownScrollArrow.svg";
import MainApartment from "@/app/assets/Main-Apartment.svg";
import MobileMainApartment from "@/app/assets/MobileMainImageKolkhi.svg";
import DownScrollAnimation from "../../molecules/downScrollAnimation/DownScrollAnimation";
import Header from "../../organisms/header/Header";
import Elipse from "@/app/assets/Elipse";
import faceIcon from "../../../assets/faceIcone.svg";
import Image from "next/image";
import ContactUsMarge from "../../molecules/ContactUsMarge/ContactUsMarge";
import GoogleMap from "../../molecules/GoogleMap/GoogleMap"; 
import MainHeadLineAnimation from "../../atoms/MainHeadLineAnimation/MainHeadLineAnimation";

export default function AboutContact() {
  return (
    <>
      <Header mainImage={MainApartment} mobileMainImage={MobileMainApartment} />
      <section className="container px-[16px] lg:px-[108px] mx-auto mt-[146px] xl:mt-[200px]  z-[-1]">
        <div className="relative lg:mt-[40%] xl:mt-[30%] 2xl:mt-[25%] flex flex-col justify-center items-center">
          <div className="hidden lg:block absolute lg:bottom-[-100px] xl:bottom-[-75px] 2xl:bottom-[-60px]" style={{ zIndex: 20 }}>
            <Elipse />
          </div>
            <button
              className="absolute cursor-pointer hidden lg:block absolute uppercase leading-[1.3] text-[16px] text-white py-[24px] px-[16px] rounded-[16px] bg-[#F4EDE633]/20 z-21 backdrop-blur-[8.6px] lg:left-[-70px] lg:bottom-[-150px] xl:left-[30px] xl:bottom-[-140px] 2xl:left-[150px] 2xl:bottom-[-100px]"
              style={{
                boxShadow: "inset 0 0 25px rgba(255, 255, 255, 0.3)",
              }}
            >
              What materials do you use?
            </button>

            <button
              className="absolute cursor-pointer hidden lg:block absolute uppercase leading-[1.3] text-[16px] text-white py-[24px] px-[16px] rounded-[16px] bg-[#F4EDE633]/20 z-21 backdrop-blur-[8.6px] lg:left-[-90px] lg:bottom-[400px] xl:left-[0px] xl:bottom-[410px] 2xl:left-[10px] 2xl:bottom-[410px]"
              style={{
                boxShadow: "inset 0 0 25px rgba(255, 255, 255, 0.3)",
              }}
            >
              Do you work on residential or commercial buildings?
            </button>

            <button
              className="absolute cursor-pointer hidden lg:block absolute uppercase leading-[1.3] text-[16px] text-white py-[24px] px-[16px] rounded-[16px] bg-[#F4EDE633]/20 z-21 backdrop-blur-[8.6px] lg:right-[-90px] lg:bottom-[295px] xl:right-[0px] xl:bottom-[340px] 2xl:right-[70px] 2xl:bottom-[350px]"
              style={{
                boxShadow: "inset 0 0 25px rgba(255, 255, 255, 0.3)",
              }}
            >
              How long does construction take?
            </button>

            <button
              className="absolute cursor-pointer hidden lg:block absolute uppercase leading-[1.3] text-[16px] text-white py-[24px] px-[16px] rounded-[16px] bg-[#F4EDE633]/20 z-21 backdrop-blur-[8.6px] lg:right-[-70px] lg:bottom-[-70px] xl:right-[0px] xl:bottom-[-100px] 2xl:right-[130px] 2xl:bottom-[-38px]"
              style={{
                boxShadow: "inset 0 0 25px rgba(255, 255, 255, 0.3)",
              }}
            >
              What guarantees do you offer?
            </button>
          <div className="flex justify-center w-full">
            <button className="bg-[#FFFFFF0D] text-[#FFFFFF] px-[16px] py-[16px] rounded-full mb-[16px] lg:mb-[0px]">
              Contact us
            </button>
          </div>

          <MainHeadLineAnimation />
          
          <div className="flex justify-start items-center gap-2 pb-[24px] ">
            <Image
              className=""
              src={faceIcon}
              width={224}
              height={80}
              alt="faceIcone"
            />
          </div>
        </div>
        <DownScrollAnimation
          DownScroll={DownScroll}
          DownScrollArrow={DownScrollArrow}
        />
        
        
        <div className="mt-[350px] sm:mt-[600px] xl:mt-[400px] my-[200px] pt-[112px]">
          <ContactUsMarge />
        <GoogleMap />
        </div>
      </section>
    </>
  );
}