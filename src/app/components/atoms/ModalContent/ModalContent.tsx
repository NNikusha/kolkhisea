import React from 'react'
import Button from '@/app/components/atoms/Button/Button'
import PopUpForm from '../PopUpForm/PopUpForm'

const ModalContent = () => {
  return (
    <div>
      <h1 className='text-[#000000] sm:text-[32px] text-[18px] font-normal leading-[130%] pt-[56px]'>
        WOULD YOU LIKE TO LEARN MORE ABOUT KOLKHISEA?
      </h1>
      <p className='font-normal sm:text-[16px] text-[14px] leading-[150%] text-[#3D3D3D] pt-4'>
        Please provide your contact information, and our specialists will be in touch to discuss the details.
      </p>
      <PopUpForm/>
      <div>
        <Button 
          text='Submit'
          className="gap-[10px]"
        />
      </div>
    </div>
  )
}

export default ModalContent