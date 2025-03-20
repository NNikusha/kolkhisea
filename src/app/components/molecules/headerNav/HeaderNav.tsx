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
    <div className="flex items-center justify-between w-[68%] m-auto mt-4">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white"></div>
        <h2 className="tracking-[1px]">LOGO</h2>
      </div>
      <div>
        <nav>
          <ul className="flex gap-12 leading-[100%]  tracking-[0%] font-medium">
          {NavBar.map((item) => (
          <NavList key={item.id} text={item.text} link={item.link} />
        ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-6">
        <ChangeLangHeader 
        lang="Eng"
        image={DownArrow}
        />
        <div>
          <OrangeButton text="choose apartment" />
        </div>
      </div>
    </div>
  );
}
