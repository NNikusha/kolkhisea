import React from "react";
import OrangeButton from "../../atoms/orangeButton/OrangeButton";
import DownArrow from "@/app/assets/arrow-down-small.svg"
import NavList from "../../atoms/navList/NavList";
import ChangeLangHeader from "../../atoms/changeLangHeader/ChangeLangHeader";



const NavBar = [
    {
        id:1,
        link:"/",
        text:"main Page"
    },
    {
        id:2,
        link:"/",
        text:"About Project"
    },
    {
        id:3,
        link:"/",
        text:"About Us"
    },
    {
        id:4,
        link:"/",
        text:"Contacts"
    },
]

export default function HeaderNav() {
  return (
    <div className="flex items-center absolute left-1/2 -translate-x-1/2 justify-between container px-[16px] lg:px-[150px]  m-auto mt-4">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white"></div>
        <h2 className="tracking-[1px]">LOGO</h2>
      </div>
      <div>
        <nav className="hidden xl:flex">
          <ul className="flex gap-12 leading-[100%]  tracking-[0%] font-medium cursor-pointer">
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
        image={DownArrow}
        />
        </div>
        <div className="flex items-center gap-[19px]">
          <OrangeButton text="choose apartment" />
          <div className="flex xl:hidden flex-col gap-[11px] ">
            <div className="h-[1px] w-[19px] h-[3px] rounded-[16px] bg-white"></div>
            <div className="h-[1px] w-[26px] h-[3px] rounded-[16px] bg-white"></div>
            <div className="h-[1px] w-[15px] h-[3px] rounded-[16px] bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
