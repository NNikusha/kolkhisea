"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

import OrangeButton from "../../atoms/orangeButton/OrangeButton";
import NavList from "../../atoms/navList/NavList";
import ChangeLangHeader from "../../atoms/changeLangHeader/ChangeLangHeader";
import FullscreenApartmentModal from "../ApartmentSelectionModal/ApartmentSelectionModal";
import MobileChoose from "../../atoms/MobileChoose/MobileChoose";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import LanguageModal from "../../atoms/LanguageModal/LanguageModa";
import Logo from "@/app/assets/Logo";
import LogoDark from "@/app/assets/LogoDark";

const LANGUAGE_LABELS: Record<string, string> = {
  EN: "ENG",
  KA: "GEO",
  RU: "RUS",
};

export default function HeaderNav() {
  const locale = useLocale();
  const t = useTranslations("Language");
  const pathname = usePathname();
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"EN" | "KA" | "RU">(
    locale.toUpperCase() as "EN" | "KA" | "RU"
  );

  const isAboutProjectPage = pathname?.includes("/about-project");
  const isFlatDetailPage =
    /flat-detail-page|apartment-types|apartment-choose|apartments/.test(
      pathname
    );

  const NavBar = [
    { id: "1", link: `/${locale}`, text: t("MainPage") },
    { id: "2", link: `/${locale}/about-project`, text: t("AboutProject") },
    { id: "3", link: `/${locale}/about-us`, text: t("AboutUs") },
    { id: "4", link: `/${locale}/contact`, text: t("Contacts") },
    { id: "5", link: `/${locale}/gallery`, text: t("Gallery") },
    { id: "6", link: `/${locale}/apartments`, text: t("Apartments") },
  ];

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 1280);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    setCurrentLang(locale.toUpperCase() as "EN" | "KA" | "RU");
  }, [locale]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenBurgerMenu = () => setIsBurgerMenuOpen(true);
  const handleCloseBurgerMenu = () => setIsBurgerMenuOpen(false);

  const handleSelectLang = (lang: string) => {
    const typedLang = lang.toUpperCase() as "EN" | "KA" | "RU";
    setCurrentLang(typedLang);

    const segments = pathname.split("/").filter(Boolean);

    if (["en", "ka", "ru"].includes(segments[0])) {
      segments[0] = lang.toLowerCase();
    } else {
      segments.unshift(lang.toLowerCase());
    }

    const newPath = "/" + segments.join("/");
    router.push(newPath);
  };

  return (
    <>
      <div
        className={`w-full absolute z-[30] ${
          isFlatDetailPage
            ? "h-[104px] bg-white fixed top-0 left-0 rounded-b-[32px] text-[#1C1C1E] flex justify-between drop-shadow-md"
            : "mt-4"
        }`}
      >
        <div className="flex items-center justify-between pointer container px-[16px] lg:px-[108px] m-auto">
          <Link href={`/${locale}`}>
            {isFlatDetailPage ? (
              <LogoDark className="w-[120px] h-[32px] sm:w-[204px] xl:w-[164px] 2xl:w-[204px] mb-[7px] sm:h-[40px]" />
            ) : (
              <Logo className="w-[120px] h-[32px] sm:w-[204px] xl:w-[164px] 2xl:w-[204px] mb-[7px] sm:h-[40px]" />
            )}
          </Link>

          <nav className="hidden xl:flex">
            <ul className="flex gap-10 font-medium">
              {NavBar.map((item) => (
                <NavList
                  key={item.id}
                  text={item.text}
                  link={item.link}
                  isFlatDetailPage={isFlatDetailPage}
                />
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6 relative">
            <div className="hidden xl:flex">
              <div onClick={() => setIsLangModalOpen(!isLangModalOpen)}>
                <ChangeLangHeader
                  lang={LANGUAGE_LABELS[currentLang] || "ENG"}
                  fillColor={isFlatDetailPage ? "#000000" : "#FFFFFF"}
                  isLangModalOpen={isLangModalOpen}
                />
              </div>
              <LanguageModal
                isOpen={isLangModalOpen}
                onClose={() => setIsLangModalOpen(false)}
                onSelectLang={handleSelectLang}
                selectedLang={currentLang}
              />
            </div>

            <div className="flex items-center gap-[19px]">
              {!isAboutProjectPage && (
                <div onClick={handleOpenModal}>
                  <OrangeButton text={t("SeeTheProject")} />
                </div>
              )}
              <div
                className="flex xl:hidden flex-col gap-[11px]"
                onClick={handleOpenBurgerMenu}
              >
                <div
                  className={`w-[19px] h-[3px] rounded-[16px] ${
                    isFlatDetailPage ? "bg-black" : "bg-white"
                  }`}
                />
                <div
                  className={`w-[26px] h-[3px] rounded-[16px] ${
                    isFlatDetailPage ? "bg-black" : "bg-white"
                  }`}
                />
                <div
                  className={`w-[15px] h-[3px] rounded-[16px] ${
                    isFlatDetailPage ? "bg-black" : "bg-white"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BurgerMenu
        isOpen={isBurgerMenuOpen}
        handleCloseBurgerMenu={handleCloseBurgerMenu}
        navItems={NavBar}
      />

      {isMobile ? (
        <MobileChoose
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          showButton={false}
        />
      ) : (
        <FullscreenApartmentModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
