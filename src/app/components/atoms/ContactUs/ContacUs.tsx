import React from 'react'
import Image from 'next/image'

interface ContactUsProps {
    title: string;
    text: string;
    icone: string;
    extraClasses?: string;
    extraWidthClass?:string;
    about: string;
    aboutFb?:string;
    aboutIn?:string;
  }
const ContactUs: React.FC<ContactUsProps> = ({ icone, title, text, about, aboutFb, aboutIn, extraClasses, extraWidthClass })  => {
    return (
        <>
            <div className='lg:pt-[72px] pt-[24px]'>
                <Image className='m-auto lg:m-0' src={icone} alt="mail" width={40} height={40} />
                <h3 className='pt-[24px] pb-[8px] lg:text-[24px] text[20px] text-[#1C1C1E]'>{title}</h3>
                <p className={`text-[#8A8A8A] text-[14px] lg:text-[16px] ${extraWidthClass}`}>{text}</p>
                <div className={`pt-[24px] lg:text-[14px] xl:text-[16px] text-[#285260] font-extrabold ${extraClasses}`}>
                    <p>{about}</p>
                    <p>{aboutFb}</p>
                    <p>{aboutIn}</p>
                </div>
            </div>
        </>
  )
}

export default ContactUs