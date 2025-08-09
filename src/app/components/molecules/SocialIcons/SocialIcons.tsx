import React from 'react';
import { useTranslations } from 'next-intl';
import SocialIcon from '../../atoms/SocialIcon/SocialIcon';
import FacebookLogo from '@/app/assets/Facebook-Logo.svg'
import InstagramLogo from '@/app/assets/Instagram-Logo.svg'

const SocialIcons = () => {
  const t = useTranslations('Language');
  
  return (
    <div>
        <div className='flex flex-col space-y-4 lg:pt-[55px]'>
            <div className=' font-medium'>
                <p>{t('SocialMedia')}</p>
            </div>
            <div className="flex space-x-2">
            <SocialIcon src={FacebookLogo} alt="Facebook" href="https://www.facebook.com/kolkhisea.residence" />
            <SocialIcon src={InstagramLogo} alt="Instagram" href="https://www.instagram.com/kolkhisea_residence?igsh=eDI4M2d0NWxyOXk4" />
            </div>
        </div>
    </div>
  );
};

export default SocialIcons;