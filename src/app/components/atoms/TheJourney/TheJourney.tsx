import React from 'react'
import Image from 'next/image'

interface TheJourneyProps {
    imageBg: string,
    about: string,
    title: string,
    titleSpan: string,
    text: string
}

const TheJourney = ({ imageBg, about, title, titleSpan, text }: TheJourneyProps) => {
    return (
        <div className='relative h-[497px] lg:h-[581px] bg-[#F3F6FB] rounded-[25px] text-[#3D3D3D]'>
            <div>
             <Image className='w-[343px] lg:w-[350px] xl:w-[480px]' src={imageBg} width={480} height={400} alt='TheJourneyBg' objectFit='responsive' />  
             <div className='absolute w-[100%] h-[90px] top-[25%] xl:top-[36%] bg-gradient-to-t from-[#F3F6FB] via-[#DEE6ED] to-transparent'>
                    <p className='inline ml-[16px] lg:ml-[32px] rounded-[200px] px-[16px] py-[10px] lg:py-[16.5px] bg-white text-[#285260]'>
                        {about}
                    </p>
                    <h3 className='pl-[16px] lg:pl-[32px] pt-[16px] pb-[24px] text-[18px] lg:text-[24px] text-[#1c1c1e]'>
                        {title}
                        <span className='text-[#cb684d]'>
                            {titleSpan}
                        </span>
                    </h3>
                </div>             
            </div>
            <div>
                <p className='lg:pt-[24px] lg:pb-[40px] lg:px-[32px] pt-[16px] pb-[24px] px-[16px] lg:text-[16px] text-[14px] w-[311px] lg:w-[350px] xl:w-[480px] '>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default TheJourney
