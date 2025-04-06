import React from 'react'

const ContactPageElipseButtons = () => {
  return (
    <div>
        <button
              className="absolute cursor-pointer hidden lg:block absolute uppercase leading-[1.3] text-[16px] text-white py-[24px] px-[16px] rounded-[16px] bg-[#F4EDE633]/20 z-21 backdrop-blur-[8.6px] lg:left-[-70px] lg:bottom-[-150px] xl:left-[30px] xl:bottom-[-140px] 2xl:left-[150px] 2xl:bottom-[-100px]"
              style={{
                boxShadow: "inset 0 0 25px rgba(255, 255, 255, 0.3)",
              }}
            >
              What materials do you use?
            </button>

            <button
              className="absolute cursor-pointer hidden lg:block absolute uppercase leading-[1.3] text-[16px] text-white py-[24px] px-[16px] rounded-[16px] bg-[#F4EDE633]/20 z-21 backdrop-blur-[8.6px] lg:left-[-90px] lg:bottom-[400px] xl:left-[0px] xl:bottom-[410px] 2xl:left-[10px] 2xl:bottom-[410px]"
              style={{
                boxShadow: "inset 0 0 25px rgba(255, 255, 255, 0.3)",
              }}
            >
              Do you work on residential or commercial buildings?
            </button>

            <button
              className="absolute cursor-pointer hidden lg:block absolute uppercase leading-[1.3] text-[16px] text-white py-[24px] px-[16px] rounded-[16px] bg-[#F4EDE633]/20 z-21 backdrop-blur-[8.6px] lg:right-[-90px] lg:bottom-[295px] xl:right-[0px] xl:bottom-[340px] 2xl:right-[70px] 2xl:bottom-[350px]"
              style={{
                boxShadow: "inset 0 0 25px rgba(255, 255, 255, 0.3)",
              }}
            >
              How long does construction take?
            </button>

            <button
              className="absolute cursor-pointer hidden lg:block absolute uppercase leading-[1.3] text-[16px] text-white py-[24px] px-[16px] rounded-[16px] bg-[#F4EDE633]/20 z-21 backdrop-blur-[8.6px] lg:right-[-70px] lg:bottom-[-70px] xl:right-[0px] xl:bottom-[-100px] 2xl:right-[130px] 2xl:bottom-[-38px]"
              style={{
                boxShadow: "inset 0 0 25px rgba(255, 255, 255, 0.3)",
              }}
            >
              What guarantees do you offer?
            </button>
    </div>
  )
}

export default ContactPageElipseButtons