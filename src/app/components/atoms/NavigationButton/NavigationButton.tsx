import React from "react";
import LeftArrow from "@/app/assets/LeftArrow";
import RightArrow from "@/app/assets/RightArrow";

interface NavigationButtonProps {
  direction: "next" | "prev";
  onClick: () => void;
  isDisabled: boolean;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, onClick, isDisabled }) => {
  return (
    <button
      className={`w-[32px] h-[32px] rounded-full flex items-center justify-center z-10 transition duration-300 ${
        isDisabled ? "bg-gray-300" : "bg-[#1C1C1E]"
      }`}
      aria-label={direction === "next" ? "Next slide" : "Previous slide"}
      onClick={onClick}
      disabled={isDisabled}
    >
      {direction === "next" ? (
        <RightArrow fill="white" BgFill="none" />
      ) : (
        <LeftArrow fill="white" />
      )}
    </button>
  );
};

export default NavigationButton;