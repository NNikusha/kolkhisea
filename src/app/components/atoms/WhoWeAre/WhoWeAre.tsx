import React from 'react'
import Image from 'next/image'
import faceIcone from '@/app/assets/faceIcone.svg'
import mainBlock from '@/app/assets/mainBlock.svg'

const WhoWeAre = () => {
    return (
        <div className='relative px-[300px] bg-[##F3F6FB]'>
            <div className='flex justify-between pb-[48px]'>
                <div>
                    <h1 className='text-[#1C1C1E] text-[64px] pb-[48px]'>Who <span className='text-[#ABABAB]'>We Are</span> </h1>
                    <p className='text-[#3D3D3D]'>With years of experience in the real estate and construction industry, [Company Name] has become a trusted name in delivering high-end residential and commercial projects. Our team of skilled architects, engineers, and designers work together to craft spaces that are not only aesthetically pleasing but also functional and sustainable.</p>
                </div>
                <div>
                    <div className='flex justify-between items-start'>
                        <p className='pb-[48px] text-[64px] text-[#000000]'>28+</p>
                        <Image className='pt-[15px]' src= {faceIcone} objectFit='' layout='' width={224} height={80} alt='faceIcone'/>
                    </div>
                    <p className='text-[#3D3D3D]'>Our team consists of experienced architects, engineers, and real estate professionals who are passionate about delivering exceptional living and investment experiences. We collaborate with top industry experts to ensure our projects meet the highest standards.</p>
                </div>
            </div>
            <div>
                <Image src= {mainBlock} className="w-full relative" objectFit='cover' layout='responsive' width={900} height={80} alt='faceIcone'/>
            </div>
        </div>
    )
}

export default WhoWeAre