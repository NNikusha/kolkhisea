import React, { useState } from "react";
import arrowDown from "../../../assets/arrowDown.svg";
import Image from "next/image";
import { DropdownProps } from "@/app/types/type";

const FilterDropdown: React.FC<DropdownProps> = ({
  title,
  value,
  onChange,
  options,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-6 w-[23%] lg:w-[27%] cursor-pointer select-none">
      <p>{title}</p>
      <div
        className="flex relative items-center px-5 xl:px-8 py-5 xl:py-6 justify-between px-4 py-2 rounded-[16px] bg-white text-gray-700 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-black text-[12px] xl:text-[16px]">{value}</span>
        <Image
          src={arrowDown}
          alt="arrow svg"
          className={` text-gray-500 transition-all duration-300 select-none transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        <div
          className={`absolute w-full top-18 xl:top-20 left-0 bg-white shadow-lg rounded-[16px] z-10 transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {options.map((option) => (
            <div
              key={option}
              className="px-5 xl:px-8 py-6 hover:text-[#868686] text-[12px] xl:text-[16px] active:text-[#B4B4B4] duration-300 transition-all text-black cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
