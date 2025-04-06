import React from 'react';

const links = [
  { name: 'Main Page', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'About Project', href: '/about-project' },
  { name: 'Contacts', href: '/contact' }
];

const FooterLinks = () => {
  return (
    <ul className="text-[#B4B4B4] space-y-[8px] underline">
      {links.map((link) => (
        <li key={link.name}>
          <a href={link.href} className="hover:text-gray-400 transition">{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;