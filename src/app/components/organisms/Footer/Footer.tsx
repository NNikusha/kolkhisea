import React from 'react';
import Logo from '../../atoms/FooterLogo/FooterLogo';
import FooterLinks from '../../molecules/FooterLinks/FooterLinks';
import ContactInfo from '../../molecules/ContactInfo/ContactInfo';
import SocialIcons from '../../molecules/SocialIcons/SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1E] w-full lg:pt-[55px]">
      <div className="container mx-auto px-4 lg:px-[108px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-6 lg:space-y-0">
          <Logo />
          <FooterLinks />
          <ContactInfo />
          <SocialIcons />
        </div>

        <div className="flex pt-[56px] pb-[24px] text-[14px] md:text-[16px] justify-between text-[#9F9F9F] font-normal">
          <p className="flex-1 text-center w-[50%]">© 2025 [Company Name]. All Rights Reserved.</p>
          <p className="text-right flex md:items-center items-end">made by NcodeX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;