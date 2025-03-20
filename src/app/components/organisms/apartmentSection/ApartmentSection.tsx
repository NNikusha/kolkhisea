import React from "react";
import Header from "../header/Header";
import Image from "next/image";
import InsideView from "../../../assets/InsideView.svg"
import ArrowRight from "@/app/assets/arrow-up-right.svg";
import infoApartment from "@/app/assets/InfoApartment.svg";
import DownScroll from "@/app/assets/DownScroll.svg";
import DownScrollArrow from "@/app/assets/DownScrollArrow.svg";
import Link from "next/link";

export default function ApartmentSection() {
  return (
    <>
      <Header />
      <section className="container px-[150px] mx-auto mt-[200px]">
        <div className="relative">
          <Image
            className="absolute  left-[20%] top-[105px] "
            alt="InsideView"
            src={InsideView}
            width={104}
            height={56}
          />
          <h1 className="uppercase text-[64px] font-medium leading-[87px] w-[70.5%]">
            Crafting Excellence, One PR <span className="pl-32">ject</span> at a
            Time
          </h1>
        </div>
        <div>
          <p className="leading-[150%] w-[35%] uppercase mt-10">
            From premium apartments to commercial spaces, we bring your vision
            to life with quality craftsmanship and innovative solutions.
          </p>
        </div>
        <div className="mt-14 flex items-center gap-3.5 bg-[var(--reddish-Gray)] w-[203px] py-5 px-[24px] rounded-2xl cursor-pointer">
          <Link href={"/"}>
            <button className="cursor-pointer">See the project</button>
          </Link>
          <Image alt="InsideView" src={ArrowRight} width={15} height={15} />
        </div>
        <div className="absolute  right-[17.9%] top-[480px]">
          <div className="relative">
            <Image
              alt="InsideView"
              src={infoApartment}
              width={379}
              height={238}
            />
            <h3 className="absolute top-[35%] left-[4%] uppercase leading-[140%] ">
              SUSTAINABLE, <br />
              ECO-FRIENDLY materials
            </h3>
            <p className="absolute top-[62%] left-[4%] text-[14px] leading-[150%] font-light w-[90%]">
              Hotel are built using the finest sustainable, eco-friendly
              materials, ensuring both elegance and responsibility.
            </p>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2  top-[860px]">

        <div className="flex flex-col items-center relative">
        <Image alt="InsideView" src={DownScroll} width={109} height={109} />
        <Image alt="InsideView" className="absolute top-[60%]" src={DownScrollArrow} width={10} height={64} />
        </div>
        </div>
      </section>
    </>
  );
}
