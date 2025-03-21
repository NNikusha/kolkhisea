import React from 'react';
import SocialIcon from '../../atoms/SocialIcon/SocialIcon';
import FacebookLogo from '@/app/assets/Facebook-Logo.svg'
import xLogo from '@/app/assets/X-Logo.svg'
import InstagramLogo from '@/app/assets/Instagram-Logo.svg'

const SocialIcons = () => {
  return (
    <div>
        <div className='flex flex-col space-y-4 pt-[55px]'>
            <div className=' font-medium'>
                <p>Social media</p>
            </div>
            <div className="flex space-x-2">
            <SocialIcon src={FacebookLogo} alt="Facebook" />
            <SocialIcon src={xLogo} alt="X (Twitter)" />
            <SocialIcon src={InstagramLogo} alt="Instagram" />
            </div>
        </div>
    </div>
  );
};

export default SocialIcons;