"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import CloseIcon from "../../../assets/CloseIcon.svg";
import LanguageDropDown from "../../atoms/LanguageDropDown/LanguageDropDown";
import { BurgerMenuProps } from "@/app/types/type";

const BurgerMenu = ({
  isOpen,
  handleCloseBurgerMenu,
  navItems,
}: BurgerMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (link: string) => {
    router.push(link);
    handleCloseBurgerMenu();
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute bottom-0 h-[100vh] left-0 right-0 bg-white rounded-t-3xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          boxShadow: "0px -4px 25px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="w-full flex flex-col cursor-grab px-4 text-black">
          <div className="flex flex-col py-5 gap-10">
            <div className="w-full flex items-center justify-between">
              <p className="font-normal text-[#7E7E7E]">Menu</p>
              <button className="text-black" onClick={handleCloseBurgerMenu}>
                <Image src={CloseIcon} alt="CloseIcon" width={24} height={24} />
              </button>
            </div>
            <div className="flex flex-col text-[24px] gap-10">
              {navItems.map((item) => (
                <p
                  key={item.id}
                  className={`cursor-pointer ${
                    pathname === item.link
                      ? "font-extrabold"
                      : "font-extralight"
                  }`}
                  onClick={() => handleNavigation(item.link)}
                >
                  {item.text}
                </p>
              ))}
            </div>
            <LanguageDropDown options={["Geo", "Rus"]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
