import Image from "next/image";
import React from "react";
import MainApartment from "@/app/assets/Main-Apartment.svg";
import MobileMainApartment from "@/app/assets/MobileMainImageKolkhi.svg";

export default function Header() {
  return (
    <>
      <header className="w-full relative">
        <section className="flex justify-between items-center relative w-full">
          <div className="absolute -z-10 w-full h-full top-0 left-0 border-b-[50%]">
            <Image
              className="hidden sm:flex min-h-[1080px] rounded-b-[45px] xl:rounded-b-[60px]"
              alt="MainApartment"
              src={MainApartment}
              layout="fill"
              objectFit="cover"
            />
            <Image
              className=" sm:hidden min-h-[900px] rounded-b-[45px] sm:hidden"
              alt="MainApartment"
              src={MobileMainApartment}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
      </header>
    </>
  );
}
