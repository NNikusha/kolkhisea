import React from 'react'
import Image from 'next/image'
import faceIcone from '@/app/assets/faceIcone.svg'
import mainBlock from '@/app/assets/mainBlock.svg'

const WhoWeAre = () => {
    return (
        <div className='relative container px-[16px] lg:px-[150px] mx-auto w-full bg-[#F3F6FB]'>
            <div className='flex flex-col md:flex-row justify-between pb-[48px] gap-8'>
            <div className='md:w-[40%]'>
                    <h1 className='text-[#1C1C1E] text-[48px] md:text-[64px] font-normal pb-[24px]'>
                        WHO <span className='text-[#ABABAB]'>WE ARE</span>
                    </h1>
                    <p className='text-[#3D3D3D] text-base leading-relaxed'>
                        With years of experience in the real estate and construction industry, 
                        [Company Name] has become a trusted name in delivering high-end residential 
                        and commercial projects. Our team of skilled architects, engineers, and 
                        designers work together to craft spaces that are not only aesthetically 
                        pleasing but also functional and sustainable.
                    </p>
                </div>
                <div className='md:w-[40%]'>
                    <div className='flex justify-start items-center gap-2 pb-[24px]'>
                        <p className='text-[48px] md:text-[64px] text-[#000000] font-normal'>28+</p>
                        <Image 
                            className='' 
                            src={faceIcone} 
                            width={224} 
                            height={80} 
                            alt='faceIcone'
                        />
                    </div>
                    <p className='text-[#3D3D3D] text-base leading-relaxed'>
                        Our team consists of experienced architects, engineers, and real estate 
                        professionals who are passionate about delivering exceptional living and 
                        investment experiences. We collaborate with top industry experts to ensure 
                        our projects meet the highest standards.
                    </p>
                </div>
            </div>
            <div className='rounded-lg overflow-hidden'>
                <Image 
                    src={mainBlock} 
                    className="w-full relative" 
                    width={1200}
                    height={450}
                    alt='Modern building'
                    priority
                />
            </div>
        </div>
    )
}

export default WhoWeAre