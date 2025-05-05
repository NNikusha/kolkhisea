'use client';

import CloseIcon from "@/app/assets/CloseIcon";
import Success from "@/app/assets/Success";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

interface GetInTouchSuccessProps {
  onClose: () => void;
}

const GetInTouchSuccess: React.FC<GetInTouchSuccessProps> = ({ onClose }) => {
  const t = useTranslations("Language");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 400);
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-[#0C0C0C]/60 z-[100] flex justify-center items-center pointer-events-auto px-[16px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={handleClose}
        >
          <motion.div
            className="relative flex flex-col items-center justify-between bg-white rounded-[16px] p-8 mx-[6px] w-auto absolute top-[-10%]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end text-black text-xl font-bold cursor-pointer"
              onClick={handleClose}
            >
              <CloseIcon />
            </button>

            <div className="pb-[32px] pt-[16px]">
              <Success />
            </div>

            <div className="text-black text-[32px] uppercase text-center">
              {t("SuccessTitle")}
            </div>

            <div className="text-[#3D3D3D] text-lg mt-4 text-center">
              {t("SuccessMessage")}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default GetInTouchSuccess;