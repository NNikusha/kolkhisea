"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import CloseIcon from "../../../assets/CloseIcon.svg";
import LanguageDropDown from "../../atoms/LanguageDropDown/LanguageDropDown";
import Kolkhisea from "../../../assets/Kolkhisea.svg";
import flowers from "../../../assets/Layer_1.svg";

interface NavItem {
  id: string;
  text: string;
  link: string;
}

interface BurgerMenuProps {
  isOpen?: boolean;
  handleCloseBurgerMenu?: () => void;
  navItems?: NavItem[];
}

const BurgerMenu = ({
  isOpen = false,
  handleCloseBurgerMenu = () => {},
  navItems = [],
}: BurgerMenuProps) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleNavigation = (link: string) => {
    router.push(link);
    handleCloseBurgerMenu();
  };

  return (
    <div
      className={`fixed inset-0 z-60 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute bottom-0 left-0 right-0 h-[100dvh] bg-[#1C1C1E] transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex flex-col px-4 pt-6 text-black">
          <div className="flex flex-col gap-12">
            <div className="flex items-center justify-between">
              <Image src={Kolkhisea} alt="logo" />
              <button onClick={handleCloseBurgerMenu}>
                <Image src={CloseIcon} alt="close" width={24} height={24} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              <p className="font-bold text-[#7E7E7E] uppercase">Menu</p>
              <div className="flex flex-col gap-6 text-[24px]">
                {navItems.map((item, index) => {
                  const isActive =
                    (pathname.replace(/^\/[^\/]+/, "") || "/").replace(
                      /\/$/,
                      ""
                    ) === item.link.replace(/\/$/, "");
                  return (
                    <div key={item.id} className="flex flex-col gap-6">
                      <p
                        className={`cursor-pointer ${
                          isActive
                            ? "font-extrabold text-white"
                            : "font-extralight text-[#818181]"
                        }`}
                        onClick={() => handleNavigation(item.link)}
                      >
                        {item.text}
                      </p>
                      {index < navItems.length - 1 && (
                        <div className="h-[1px] bg-[#7E7E7E]" />
                      )}
                    </div>
                  );
                })}
              </div>
              {/* Now we just use the updated LanguageDropDown component */}
              <LanguageDropDown />
            </div>
          </div>
          <Image
            className="absolute bottom-0 right-0"
            src={flowers}
            alt="flowers"
          />
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;