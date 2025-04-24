import React from 'react'
import Image from 'next/image'
import FlowersImage from '@/app/assets/FlowersImage.png'
import GetInTouchForm from '../../atoms/GetInTouchForm/GetInTouchForm'
import Button from '../../atoms/Button/Button'

const GetInTouchSection = () => {
  return (
    <div className='bg-[#FFFFFF] w-full'>
        <div className='container px-[16px] lg:px-[108px] mx-auto flex justify-between'>
            <div>
                <h1 className='text-[48px] font-normal text-[#1C1C1E] pt-[97px]'>GET IN TOUCH</h1>
                <p className='text-[#3D3D3D] font-normal pt-4'>Do you want to receive daily deals on your phone?</p>
                <GetInTouchForm />
                <div className='pb-[64px]'>
                    <Button 
                        text='Send a request'
                        className="gap-[10px]"
                    />
                </div>
            </div>
            
            <div className='flex'>
                <div className='bg-[#285260] h-full w-[24px]'></div>
                <Image
                    src={FlowersImage}
                    width={648}
                    height={548}
                    alt="Flowers Image"
                />
            </div>
        </div>
    </div>
  )
}

export default GetInTouchSection