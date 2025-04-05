"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import OrangeButton from "../../atoms/orangeButton/OrangeButton";
import NavList from "../../atoms/navList/NavList";
import ChangeLangHeader from "../../atoms/changeLangHeader/ChangeLangHeader";
import FullscreenApartmentModal from '../ApartmentSelectionModal/ApartmentSelectionModal';

const NavBar = [
    {
        id: 1,
        link: "/",
        text: "Main Page"
    },
    {
        id: 2,
        link: "/",
        text: "About Project"
    },
    {
        id: 3,
        link: "/",
        text: "About Us"
    },
    {
        id: 4,
        link: "/",
        text: "Contacts"
    },
];

export default function HeaderNav() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // const isAboutProjectPage = pathname === "/about-project";
  const isFlatDetailPage = pathname === "/flat-detail-page"; 

  const handleOpenModal = () => {
    setIsModalOpen(true);
    console.log("its oppening")
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`w-full ${
          isFlatDetailPage
            ? "h-[104px] bg-white rounded-b-[32px] text-[#1C1C1E] flex items-center justify-between fixed top-0 left-0 z-20"
            : "absolute left-1/2 -translate-x-1/2 mt-4"
        }`}
      >
        <div className="flex items-center justify-between container px-[16px] lg:px-[108px] m-auto">
          <div className="flex items-center gap-4">
            <div
              className={`w-10 h-10 rounded-full ${
                isFlatDetailPage ? "bg-black" : "bg-white"
              }`}
            ></div>
            <h2 className="tracking-[1px]">LOGO</h2>
          </div>
          <div>
            <nav className="hidden xl:flex">
              <ul className="flex gap-12 leading-[100%] tracking-[0%] font-medium cursor-pointer">
                {NavBar.map((item) => (
                  <NavList key={item.id} text={item.text} link={item.link} />
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden xl:flex">
              <ChangeLangHeader
                lang="Eng"
                fillColor={isFlatDetailPage ? "#000000" : "#FFFFFF"}
              />
            </div>
            <div className="flex items-center gap-[19px]">
              <div onClick={handleOpenModal}>
                <OrangeButton text="choose apartment" />
              </div>
              <div className="flex xl:hidden flex-col gap-[11px] ">
                <div className={`h-[1px] w-[19px] h-[3px] rounded-[16px] ${isFlatDetailPage ? "bg-black" : "bg-white"}`}></div>
                <div className={`h-[1px] w-[26px] h-[3px] rounded-[16px] ${isFlatDetailPage ? "bg-black" : "bg-white"}`}></div>
                <div className={`h-[1px] w-[15px] h-[3px] rounded-[16px] ${isFlatDetailPage ? "bg-black" : "bg-white"}`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FullscreenApartmentModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </>
  );
}