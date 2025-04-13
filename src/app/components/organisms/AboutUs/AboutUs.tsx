import React from 'react'
import AboutUsSection from '../../molecules/AboutUsSection/AboutUsSection'
import ChooseUsSection from '../../molecules/ChooseUsSection/ChooseUsSection'
import OurMissionSection from '../../molecules/OurMissionSection/OurMissionSection'
import WhoWeAre from '../../atoms/WhoWeAre/WhoWeAre'
import TheJourneyMerg from '../../molecules/TheJourneyMerg/TheJourneyMerg'
import OurMission from '../../atoms/OurMission/OurMission'

const AboutUs = () => {
    return (
        <div className="flex flex-col w-full">
            <section className="relative w-full">
                <AboutUsSection />
            </section>
            
            <section className="w-full mt-[424px] sm:mt-[604px] xl:mt-[228px] 2xl:mt-[340px] ">
                <WhoWeAre />
            </section>
            
            <section className="w-full">
                <ChooseUsSection />
            </section>
            
            <section className="w-full bg-white relative rounded-t-[56px] lg:py-[5px] 2xl:py-[80px] mt-[72px] 2xl:mt-[168px]">
                <OurMission />
                <OurMissionSection />
                <TheJourneyMerg />
            </section>
        </div>
    )
}

export default AboutUs