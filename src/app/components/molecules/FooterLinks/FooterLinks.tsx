import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const FooterLinks = () => {
  const t = useTranslations('Language');
  
  const links = [
    { name: t('MainPage'), href: '/' },
    { name: t('AboutUs'), href: '/about-us' },
    { name: t('AboutProject'), href: '/about-project' },
    { name: t('Contacts'), href: '/contact' }
  ];

  return (
    <ul className="text-[#B4B4B4] space-y-[8px] underline">
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href} className="hover:text-gray-400 transition">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;