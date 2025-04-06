import React from "react";
import { ButtonProps } from "@/app/types/type";

type PaddingOption = "default" | "large";

interface ExtendedButtonProps extends ButtonProps {
  padding?: PaddingOption;
}

const FilterButton: React.FC<ExtendedButtonProps> = ({
  children,
  active,
  onClick,
  padding = "default",
}) => {
  const paddingClasses = {
    default: "px-4.5 py-5 xl:p-6",
    large: "px-6 sm:px-8 py-4 sm:py-5 xl:px-10 xl:py-6",
  };

  return (
    <button
      className={`rounded-[8px] md:rounded-[16px] text-[15px] lg:text-[16px] cursor-pointer border-0 duration-300 ease-in ${
        paddingClasses[padding]
      } ${
        active
          ? "bg-[#CB684D] text-white"
          : "bg-[#ECF0F8] md:bg-white text-[#1C1C1E] md:hover:bg-[#ECF0F8]"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FilterButton;
