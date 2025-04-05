import React from 'react'
import ContactUs from '../../atoms/ContactUs/ContacUs'
import mailIcone from '../../../assets/mail.svg'
import call from '../../../assets/call.svg'
import location from '../../../assets/location.svg'
import socialLinks from '../../../assets/socialLinks.svg'

const ContactUsMarge = () => {
    return (
        <>
            <div className='flex flex-col lg:items-start items-center lg:text-left text-center pb-[24px] lg:b-[0px] '>
                <p className="inline px-[16px] py-[14px] lg:py-[16.5px] lg:text-[16px] text-[12px] text-[#285260] bg-[#2852600D] rounded-[200px]">Reach Out to Us</p>
                <h1 className="pt-[16px] pb-[16px] lg:pb-[24px] uppercase text-[#1C1C1E] lg:text-[40px] text-[24px]">We’d love to hear from you</h1>
                <p className="text-[#3D3D3D] lg:text-[16px] text-[14px]">Get in touch with us  for any enquiries and questions.</p>
            </div>
            <div className='flex flex-col lg:flex-row lg:justify-centre items-center lg:text-left text-center justify-between'>            
                <ContactUs
                    icone={mailIcone}
                    title='Write Us'
                    text='Our team can respond in real time'
                    about='example@gmail.com'
                    extraWidthClass='w-full lg:w-[57%] xl:w-[66%]'
                />

                <ContactUs
                    icone={call}
                    title='Call Us'
                    text='Available during working hours'
                    about='+995 599 457 899'
                    extraWidthClass='w-full lg:w-[73%]'
                />

                <ContactUs
                    icone={location}
                    title='Visit Us'
                    text='Our working time 9:00-19:00'
                    about='Lubliana St 12A'
                    extraWidthClass='w-full lg:w-[80%]'
                />  

                <ContactUs
                    icone={socialLinks}
                    title='Check media'
                    text='See our updates right now'
                    extraClasses="flex gap-[10px] underline mb-[5px]" 
                    aboutFb='Facebook'
                    aboutIn='Instagram'
                    about='Twitter'
                    extraWidthClass='w-full lg:w-[54%] xl:w-[60%]'
                />                               
            </div>
        </>
    )
}

export default ContactUsMarge