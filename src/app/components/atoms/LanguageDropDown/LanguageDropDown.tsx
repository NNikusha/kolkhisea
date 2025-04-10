import React, { useState } from "react";
import Image from "next/image";
import AngleDown from "../../../assets/angle-down.svg";

interface LanguageDropDownProps {
  options: string[];
}

const LanguageDropDown = ({ options }: LanguageDropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState<string>("Eng");

  const handleSelect = (option: string) => {
    setSelectedLang(option);
    setIsOpen(false);
  };

  const availableOptions = [...options, "Eng"].filter(
    (lang) => lang !== selectedLang
  );

  return (
    <div className="flex flex-col cursor-pointer select-none">
      <div className="flex flex-col gap-7 items-center justify-between text-black cursor-pointer">
        <div
          className="w-full pt-5 flex justify-between items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-black text-[24px] font-normal">
            {selectedLang}
          </span>
          <Image
            src={AngleDown}
            alt="arrow svg"
            className={`transition-all duration-300 select-none transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        <div
          className={`flex flex-col gap-6 w-full transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {availableOptions.map((option) => (
            <div
              key={option}
              className="text-[20px] duration-300 flex flex-col gap-6 transition-all text-[#7E7E7E] font-light cursor-pointer"
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

export default LanguageDropDown;
