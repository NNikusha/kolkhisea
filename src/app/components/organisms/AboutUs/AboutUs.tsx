import React from 'react'
import AboutUsSection from '../../molecules/AboutUsSection/AboutUsSection'
import ChooseUsSection from '../../molecules/ChooseUsSection/ChooseUsSection'
import OurMissionSection from '../../molecules/OurMissionSection/OurMissionSection'
import WhoWeAre from '../../atoms/WhoWeAre/WhoWeAre'
import TheJourneyMerg from '../../molecules/TheJourneyMerg/TheJourneyMerg'
import OurMission from '../../atoms/OurMission/OurMission'
import BackGroundLine6 from '@/app/assets/BackGroundLine6'
import BackGroundLine1 from '@/app/assets/BackGroundLine1'
import BackGroundLine9 from '@/app/assets/BackGroundLine9'

const AboutUs = () => {
    return (
        <div className="flex flex-col w-full">
            <section className="relative h-[100vh]  md:h-[110vh] w-full  z-[-1]">
                <AboutUsSection />
            </section>
            <div className='relative'>
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                    <BackGroundLine6 className="absolute bottom-[0%] w-full h-auto max-w-none z-[-1]" />
                    <BackGroundLine1 className="absolute top-[10%] w-full h-auto max-w-none z-[0]" />
                </div>

                <WhoWeAre />
                <ChooseUsSection />
            </div>
            <div className="w-full bg-white relative rounded-t-[56px] lg:py-[5px] 2xl:py-[80px] mt-[72px] 2xl:mt-[168px] relative">
                <BackGroundLine9 className="absolute 2xl:bottom-[-10%] lg:bottom-[0%] bottom-[40%] w-full h-auto max-w-none z-[1]" />
                <OurMission />
                <OurMissionSection />
                <TheJourneyMerg />
            </div>

        </div>

    )
}

export default AboutUs