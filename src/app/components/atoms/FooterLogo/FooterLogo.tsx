import React from 'react';
import Logo from '@/app/assets/Logo'
import Link from 'next/link';


const FooterLogo = () => {
  return (
    <div className="flex items-center space-x-3 pt-[83px]">
    <Link href="/">
        <Logo className="w-[244px] h-[64px] sm:w-[204px] sm:h-[40px]" />
    </Link>
  </div>
  );
};

export default FooterLogo;