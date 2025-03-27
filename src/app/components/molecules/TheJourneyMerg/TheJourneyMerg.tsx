import React from 'react'
import TheJourney from '../../atoms/TheJourney/TheJourney'
import TheJourneyBg from '@/app/assets/TheJourneyBg.svg'
import TheJourneyBg2 from '@/app/assets/TheJourneyBg2.svg'

const TheJourneyMerg = () => {
    return (
        <div className='relative container lg:px-[150px] mx-auto w-full mb-[200px]'>
            <div>
                <h1 className='flex flex-col lg:flex-row uppercase justify-between items-center lg:text-4xl text-[24px] text-[#B4B4B4]'>
                    <span>The Journey</span>
                    <span className='pt-[15px] pb-[15px] lg:pt-[0] lg:pb-[0]'>                    
                        <svg className='hidden lg:block w-[150px] xl:w-[424px]'  height="5" viewBox="0 0 424 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="424" y2="0.5" stroke="#C2C2C2"/>
                        </svg>
                        <svg className="block lg:hidden"  width="89" height="1" viewBox="0 0 89 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line opacity="0.5" x1="0.5" y1="0.5" x2="88.5" y2="0.500008" stroke="#C2C2C2"/>
                        </svg>
                    </span>
                    <span className='text-[#1C1C1E]'>of Creation</span>
                </h1> 
            </div>
            <div className='flex flex-col gap-[24px] lg:flex-row justify-between items-center pt-[56px]'>
                <TheJourney 
                    imageBg={TheJourneyBg}
                    about= 'Before'
                    title='What '
                    titleSpan='we started with'
                    text='We began with a bold vision: to create a space that blends modern aesthetics, functionality, and comfort. Our goal was to design a project that meets the needs of future residents, offering high-quality living conditions, well-thought-out layouts, and a strong infrastructure. From the start, we focused on optimizing space, ensuring natural light, and integrating innovative solutions to enhance daily life.'
                />
                <TheJourney 
                    imageBg={TheJourneyBg2}
                    about= 'After'
                    title='What '
                    titleSpan='we created'
                    text='The result is a thoughtfully designed space that seamlessly blends style, comfort, and functionality. Every detail—from the modern architecture to the optimized layouts—was crafted to enhance the quality of life for residents. We incorporated high-quality materials, energy-efficient solutions, and smart technologies to ensure long-term value and convenience.'
                />
            </div>
            
        </div>
    )
}

export default TheJourneyMerg