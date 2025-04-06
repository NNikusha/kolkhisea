import Image from "next/image";
import React from "react";
import House from "../../../assets/ModernHouseRender.svg";
import HouseMobile from "../../../assets/ModernHouseMobile.svg";

const ApartmentTypeBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 h-[50%] md:h-[80%] blur-[2px] md:blur-[1px]">
      <Image
        src={House}
        alt="House Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className="hidden md:flex"
      />
      <Image
        src={HouseMobile}
        alt="House Mobile Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
        className="flex md:hidden"
      />
    </div>
  );
};

export default ApartmentTypeBackground;
