"use client";
import React from "react";
import Header from "../header/Header";
import DownScroll from "@/app/assets/DownScroll.svg";
import DownScrollArrow from "@/app/assets/DownScrollArrow.svg";
import OpacityButton from "../../atoms/opacityButton/OpacityButton";
import MainParagraph from "../../atoms/mainParagraph/MainParagraph";
import MainHeadLine from "../../atoms/MainHeadLine/mainHeadLine";
import ModalInfo from "../../molecules/modalInfo/ModalInfo";
import DownScrollAnimation from "../../molecules/downScrollAnimation/DownScrollAnimation";


export default function ApartmentSection() {

  return (
    <>
      <Header />
      <section className=" container  px-[150px] mx-auto mt-[200px]">
        <MainHeadLine
        firstText="Crafting Excellence, One PR"
        secondText="ject at a Time"
        />
        <MainParagraph 
        paragraph="From premium apartments to commercial spaces, we bring your vision
            to life with quality craftsmanship and innovative solutions."
        />
        <OpacityButton 
        text="See the project"
        />
        <ModalInfo />
        <DownScrollAnimation 
        DownScroll={DownScroll}
        DownScrollArrow={DownScrollArrow}
        />
      </section>
    </>
  );
}
