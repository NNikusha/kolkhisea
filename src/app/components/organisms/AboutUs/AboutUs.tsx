import React from 'react'
import Footer from '../Footer/Footer'
import AboutUsSection from '../../molecules/AboutUsSection/AboutUsSection'
import ChooseUsSection from '../../molecules/ChooseUsSection/ChooseUsSection'
import OurMissionSection from '../../molecules/OurMissionSection/OurMissionSection'

const AboutUs = () => {
    return (
        <div className="flex flex-col w-full">
            <section className="relative h-[100vh] md:h-[110vh] w-full">
                <AboutUsSection />
            </section>
            
            <ChooseUsSection />
            <OurMissionSection />

            <section className="w-full ">
                <Footer />
            </section>
        </div>

    )
}

export default AboutUs