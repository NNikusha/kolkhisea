'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import FlowersImage from '@/app/assets/FlowersImage.png'
import GetInTouchForm from '../../atoms/GetInTouchForm/GetInTouchForm'
import Button from '../../atoms/Button/Button'
import PopupModal from '@/app/components/atoms/PopupModal/PopupModal'
import ModalContent from '@/app/components/atoms/ModalContent/ModalContent'

const GetInTouchSection = () => {
  const [isPopupOpen, setPopupOpen] = useState(false)

  return (
    <div className='bg-[#FFFFFF] w-full relative'>
      <div className='container px-[16px] lg:px-[108px] mx-auto flex xl:flex-row flex-col justify-between'>
        <div>
          <h1 className='text-[48px] font-normal text-[#1C1C1E] pt-[50px]'>GET IN TOUCH</h1>
          <p className='text-[#3D3D3D] font-normal pt-4'>
            Do you want to receive daily deals on your phone?
          </p>
          <GetInTouchForm />
          <div className='pb-[64px]'>
            <Button 
              text='Send a request'
              className="gap-[10px]"
              onClick={() => setPopupOpen(true)} 
            />
          </div>
        </div>

        <div className='flex'>
          <div className='bg-[#285260] h-full w-[24px]'></div>
          <div className='w-[648px] h-[548px]'>
            <Image
              src={FlowersImage}
              alt="Flowers Image"
            />
          </div>
        </div>
      </div>

      <PopupModal isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
        <ModalContent />
      </PopupModal>
    </div>
  )
}

export default GetInTouchSection