"use client";

import React from "react";
import DownScroll from "@/app/assets/DownScroll.svg";
import DownScrollArrow from "@/app/assets/DownScrollArrow.svg";
import MainApartment from "@/app/assets/Main-Apartment.svg";
import MobileMainApartment from "@/app/assets/MobileMainImageKolkhi.svg";
import MainParagraph from "../../atoms/mainParagraph/MainParagraph";
import MainHeadLine from "../../atoms/MainHeadLine/mainHeadLine";
import DownScrollAnimation from "../../molecules/downScrollAnimation/DownScrollAnimation";
import Header from "../../organisms/header/Header";

export default function AboutUsSection() {
    return (
        <>
            <Header
                mainImage={MainApartment}
                mobileMainImage={MobileMainApartment}
            />
            <section className="container px-[20px] lg:px-[150px] mx-auto mt-[146px] xl:mt-[200px]">
                <div className="flex justify-center w-full">
                    <button className=" bg-[#FFFFFF0D] text-[#FFFFFF] px-[16px] py-[16px] rounded-full mb-[40px]">

                    About us
                    </button>
                </div>
                <MainHeadLine 
                    className="text-center"
                    width="max-w-[58%]"
                    centered={true}
                    firstText="BUILDING THE FUTURE"
                    secondText="WITH EXCELLENCE"
                    firstTextColor="#FFFFFF50"
                />
                <MainParagraph
                    paragraph="At [Company Name], we don't just construct buildings—we create homes, communities, and investment opportunities. With a commitment to quality, innovation, and customer satisfaction, we bring architectural excellence to life."
                    centered={true}
                />
                <DownScrollAnimation
                    DownScroll={DownScroll}
                    DownScrollArrow={DownScrollArrow}
                />
            </section>
        </>
    );
}