"use client";

import React from "react";
import DownScroll from "@/app/assets/DownScroll.svg";
import DownScrollArrow from "@/app/assets/DownScrollArrow.svg";
import MainApartment from "@/app/assets/Main-Apartment.svg";
import MobileMainApartment from "@/app/assets/MobileMainImageKolkhi.svg";
import MainHeadLine from "../../atoms/MainHeadLine/mainHeadLine";
import DownScrollAnimation from "../../molecules/downScrollAnimation/DownScrollAnimation";
import Header from "../../organisms/header/Header";
import Elipse from "@/app/assets/Elipse";
import faceIcon from "../../../assets/faceIcone.svg"
import Image from "next/image";
import ContactUsMarge from "../../molecules/ContactUsMarge/ContactUsMarge";

export default function AboutContact() {
    return (
        <>
            <Header
                mainImage={MainApartment}
                mobileMainImage={MobileMainApartment}
            />
            <section className="container px-[20px] lg:px-[150px] mx-auto mt-[146px] xl:mt-[200px]">


                <div className="relative mt-[25%] flex flex-col flex justify-center items-center">

                    <div className=" hidden md:absolute" style={{ zIndex: -1 }}>
                        <Elipse />
                    </div>


                    <div className="flex justify-center w-full">
                        <button className=" bg-[#FFFFFF0D] text-[#FFFFFF] px-[16px] py-[16px] rounded-full mb-[40px]">
                            Contact us
                        </button>
                    </div>
                    <MainHeadLine
                        className="text-center relative z-10"
                        width="max-w-[54%]"
                        centered={true}
                        secondText="If you have any Questions Contact US"
                        firstTextColor="#FFFFFF50"
                        firstText={""}
                        showTestSpan={false}
                    />
                    <div className='flex justify-start items-center gap-2 pb-[24px]'>
                        <Image
                            className=''
                            src={faceIcon}
                            width={224}
                            height={80}
                            alt='faceIcone'
                        />
                    </div>
                </div>

                <DownScrollAnimation
                    DownScroll={DownScroll}
                    DownScrollArrow={DownScrollArrow}
                />
                <div className=" mt-[346px] sm:mt-[600px] xl:mt-[300px] pt-[112px]">
                    <ContactUsMarge />

                </div>
            </section>
        </>
    );
}