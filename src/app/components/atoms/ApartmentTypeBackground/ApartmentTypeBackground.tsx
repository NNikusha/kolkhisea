import Image from "next/image";
import React from "react";
import House from "../../../assets/ModernHouseRender.svg";
import HouseMobile from "../../../assets/ModernHouseMobile.svg";

interface ApartmentTypeBackgroundProps {
  fullHeight?: boolean;
}

const ApartmentTypeBackground: React.FC<ApartmentTypeBackgroundProps> = ({
  fullHeight = false,
}) => {
  return (
    <div
      className={`absolute inset-0 -z-10 h-[50%] ${
        fullHeight ? "md:h-full" : "md:h-[80%]"
      } blur-[2px] md:blur-[1px]`}
    >
      <Image
        src={House}
        alt="House Background"
        fill
        quality={100}
        className="hidden md:flex object-cover object-center"
      />
      <Image
        src={HouseMobile}
        alt="House Mobile Background"
        fill
        quality={100}
        className="flex md:hidden object-cover object-center"
      />
    </div>
  );
};

export default ApartmentTypeBackground;
