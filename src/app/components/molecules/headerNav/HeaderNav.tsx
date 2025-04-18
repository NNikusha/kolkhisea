"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import OrangeButton from "../../atoms/orangeButton/OrangeButton";
import NavList from "../../atoms/navList/NavList";
import ChangeLangHeader from "../../atoms/changeLangHeader/ChangeLangHeader";
import FullscreenApartmentModal from "../ApartmentSelectionModal/ApartmentSelectionModal";
import MobileChoose from "../../atoms/MobileChoose/MobileChoose";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import LanguageModal from "../../atoms/LanguageModal/LanguageModa";
import { useTranslations } from "next-intl";

const LANGUAGE_LABELS: Record<string, string> = {
  "EN": "ENG",
  "KA": "GEO",
  "RU": "RUS",
};

export default function HeaderNav() {
  const t = useTranslations('Language');

  const pathname = usePathname();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"EN" | "KA" | "RU">("EN");

  const isAboutProjectPage = pathname === "/about-project";

  const NavBar = [
    { id: "1", link: "/", text: t('MainPage') },
    { id: "2", link: "/about-project", text: t('AboutProject') },
    { id: "3", link: "/about-us", text: t('AboutUs') },
    { id: "4", link: "/contact", text: t('Contacts') },
  ];
  const isFlatDetailPage =
    pathname.endsWith("/flat-detail-page") ||
    pathname.endsWith("/apartment-types") ||
    pathname.endsWith("/apartment-choose");

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    const detectLanguage = () => {
      const segments = pathname.split('/');
      if (segments.length > 1 && ["EN", "KA", "RU"].includes(segments[1].toUpperCase())) {
        setCurrentLang(segments[1].toUpperCase() as "EN" | "KA" | "RU");
      }
    };

    checkIsMobile();
    detectLanguage();

    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [pathname]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleOpenBurgerMenu = () => setIsBurgerMenuOpen(true);
  const handleCloseBurgerMenu = () => setIsBurgerMenuOpen(false);

  const handleSelectLang = (lang: string) => {
    const typedLang = lang.toUpperCase() as "EN" | "KA" | "RU";
    setCurrentLang(typedLang);

    const segments = pathname.split('/');
    if (segments.length > 1 && ["EN", "KA", "RU"].includes(segments[1].toUpperCase())) {
      segments[1] = lang.toLowerCase();
    } else {
      segments.splice(1, 0, lang.toLowerCase());
    }

    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <>
      <div
        className={`w-full z-[11] ${isFlatDetailPage
          ? "h-[104px] bg-white rounded-b-[32px] text-[#1C1C1E] flex items-center justify-between fixed top-0 left-0 z-50 drop-shadow-md"
          : "absolute left-1/2 -translate-x-1/2 mt-4"
          }`}
      >
        <div className="flex items-center justify-between container px-[16px] lg:px-[108px] m-auto">
          <div className="flex items-center gap-4">
            <div
              className={`w-10 h-10 rounded-full ${isFlatDetailPage ? "bg-black" : "bg-white"
                }`}
            ></div>
            <h2 className="tracking-[1px]">LOGO</h2>
          </div>

          <nav className="hidden xl:flex">
            <ul className="flex gap-12 leading-[100%] tracking-[0%] font-medium cursor-pointer">
              {NavBar.map((item) => (
                <NavList key={item.id} text={item.text} link={item.link} isFlatDetailPage={isFlatDetailPage}/>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6 relative">
            <div className="hidden xl:flex">
              <div onClick={() => setIsLangModalOpen(!isLangModalOpen)}>
                <ChangeLangHeader
                  lang={LANGUAGE_LABELS[currentLang] || "ENG"}
                  fillColor={isFlatDetailPage ? "#000000" : "#FFFFFF"}
                />
              </div>
              <LanguageModal
                isOpen={isLangModalOpen}
                onClose={() => setIsLangModalOpen(false)}
                onSelectLang={handleSelectLang}
              />
            </div>

            <div className="flex items-center gap-[19px]">
              {!isAboutProjectPage && (
                <div onClick={handleOpenModal}>
                  <OrangeButton text={t('SeeTheProject')} />
                </div>
              )}
              <div
                className="flex xl:hidden flex-col gap-[11px]"
                onClick={handleOpenBurgerMenu}
              >
                <div
                  className={`w-[19px] h-[3px] rounded-[16px] ${isFlatDetailPage ? "bg-black " : "bg-white"
                    }`}
                ></div>
                <div
                  className={`w-[26px] h-[3px] rounded-[16px] ${isFlatDetailPage ? "bg-black" : "bg-white"
                    }`}
                ></div>
                <div
                  className={`w-[15px] h-[3px] rounded-[16px] ${isFlatDetailPage ? "bg-black" : "bg-white"
                    }`}
                ></div>
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