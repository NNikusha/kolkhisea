'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import CloseIcon from '@/app/assets/CloseIcon.svg'

type PopupModalProps = {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
}

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
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-[#0C0C0C99] flex items-center justify-center px-4  z-50'>
      <div className='bg-white p-[24px] rounded-[16px] shadow-lg relative sm:max-w-[536px] w-full'>
        <button
          onClick={onClose}
          className='absolute top-[24px] right-[24px] cursor-pointer'
        >
          <Image
            src={CloseIcon}
            alt="Close"
            width={18}
            height={18}
          />
        </button>
        {children}
      </div>
    </div>
  )
}

export default PopupModal