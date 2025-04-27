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
      <div className='container mx-auto flex 2xl:flex-row flex-col justify-between'>
        <div className='px-[16px] lg:px-[108px]'>
          <h1 className='sm:text-[48px] text-[24px] font-normal text-[#1C1C1E] pt-[50px]'>GET IN TOUCH</h1>
          <p className='text-[#3D3D3D] font-normal pt-4 sm:text-[16px] text-[14px]'>
            Do you want to receive daily deals on your phone?
          </p>
          <GetInTouchForm />
          <div className='xl:pb-[64px] pb-[32px]'>
            <Button 
              text='Send a request'
              className="gap-[10px] lg:text-[16px] text-[14px] sm:w-[203px] w-full sm:justify-start justify-center"
              onClick={() => setPopupOpen(true)} 
            />
          </div>
        </div>

        <div className='flex px-[0px] lg:px-[108px]'>
          <div className='bg-[#285260] h-full 2xl:flex hidden w-[24px]'></div>
          <div className=''>
            <div className='bg-[#285260] h-[20px] 2xl:hidden w-full'></div>
            <div className='w-full 2xl:h-[548px] '>
              <Image
                src={FlowersImage}
                alt="Flowers Image"
              />
            </div>
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