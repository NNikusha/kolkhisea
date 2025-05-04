'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import ModalCloseIcon from '@/app/assets/ModalCloseIcon.svg';

type PopupModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }

    return () => {
      body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-[#0C0C0C99] flex items-center justify-center px-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="bg-white p-[24px] rounded-[16px] shadow-lg relative sm:max-w-[536px] w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={onClose}
              className="absolute top-[24px] right-[24px] cursor-pointer"
            >
              <Image
                src={ModalCloseIcon}
                alt="Close"
                width={18}
                height={18}
              />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;