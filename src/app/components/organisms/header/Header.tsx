import Image from "next/image";
import Link from "next/link";
import React from "react";
import DownArrow from "@/app/assets/arrow-down-small.svg";
import MainApartment from "@/app/assets/Main-Apartment.svg";

export default function Header() {
  return (
    <>
      <header className="w-full relative">
        <section className="flex justify-between items-center relative w-full">
          <div className="absolute -z-10 w-full h-full top-0 left-0">
            <Image
            className="min-h-[1080px]"
              alt="MainApartment"
              src={MainApartment}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex items-center justify-between w-[68%] m-auto mt-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white"></div>
              <h2>LOGO</h2>
            </div>
            <div>
              <nav>
                <ul className="flex gap-12 leading-[100%] font-extrabold tracking-[0%]">
                  <li>
                    <Link href={"/"} />
                    Main Page
                  </li>
                  <li>
                    <Link href={"/"} />
                    About Project
                  </li>
                  <li>
                    <Link href={"/"} />
                    About Us
                  </li>
                  <li>
                    <Link href={"/"} />
                    Contacts
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex  gap-[15px]">
                <h3>Eng</h3>
                <Image alt="ArrowDown" src={DownArrow} width={10} height={6} />
              </div>
              <div>
                <button className="px-6 py-5 bg-[var(--reddish-orange)] rounded-2xl">
                  Choose apartment
                </button>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
