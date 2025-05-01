"use client";
import CloseIcon from "@/app/assets/CloseIcon";
import Success from "@/app/assets/Success";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface GetInTouchSuccessProps {
  onClose: () => void;
}

const GetInTouchSuccess: React.FC<GetInTouchSuccessProps> = ({ onClose }) => {

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-[#0C0C0C]/60 z-[100] flex justify-center items-center pointer-events-auto px-[16px] animate-fadeIn" onClick={onClose}>
      <div className="relative flex flex-col items-center justify-between bg-white rounded-[16px] p-8 mx-[6px] w-auto animate-popupSlideIn absolute top-[-10%]" onClick={(e) => e.stopPropagation()}>

        <button className="self-end text-black text-xl font-bold cursor-pointer" onClick={onClose}>
          <CloseIcon />
        </button>

        <div className="pb-[32px] pt-[16px]">
          <Success />
        </div>

        <div className="text-black text-[32px] uppercase text-center">
          Thank you for request!
        </div>

        <div className="text-[#3D3D3D] text-lg mt-4 text-center">
          Our team will check your request and get back to you soon!
        </div>

      </div>
    </div>,
    document.body
  );
};

export default GetInTouchSuccess;