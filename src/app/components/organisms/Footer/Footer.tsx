import React from 'react';
import Logo from '../../atoms/FooterLogo/FooterLogo';
import FooterLinks from '../../molecules/FooterLinks/FooterLinks';
import ContactInfo from '../../molecules/ContactInfo/ContactInfo';
import SocialIcons from '../../molecules/SocialIcons/SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1E] w-full pt-[55px]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 px-[16px] lg:px-[110px]">
        <Logo />
        <FooterLinks />
        <ContactInfo />
        <SocialIcons />
      </div>

      <div className="flex-1 flex pt-[56px] pb-[24px] justify-center text-[#9F9F9F] font-normal ">
        <p>© 2025 [Company Name]. All Rights Reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;