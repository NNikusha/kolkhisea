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
        <div className='relative h-[581px] bg-[#F3F6FB] rounded-[25px] text-[#3D3D3D]'>
            <Image src={imageBg} width={480} height={400} alt='TheJourneyBg' objectFit='cover' />
            <div className=''>
                <div className='absolute w-[480px] h-[100px] top-[210px] bg-gradient-to-t from-[#F3F6FB] via-[#DEE6ED] to-transparent'>
                    <p className='inline ml-[32px] rounded-[10px] px-[16px] py-[16.5px] bg-white text-[#285260]'>
                        {about}
                    </p>
                    <h3 className='pl-[32px] pt-[16px] pb-[24px] text-2xl text-[#1c1c1e]'>
                        {title}
                        <span className='text-[#cb684d]'>
                            {titleSpan}
                        </span>
                    </h3>
                </div>
                <p className='pt-[24px] pb-[40px] px-[32px] w-[480px] '>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default TheJourney
