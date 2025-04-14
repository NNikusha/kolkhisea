import Link from 'next/link';
import React from 'react';

interface NavListProps {
  text: string;
  link: string;
  isFlatDetailPage?: boolean; // Add isFlatDetailPage as a prop
}

export default function NavList({ text, link, isFlatDetailPage }: NavListProps) {
  return (
    <li className="relative group pb-1">
      <Link
        href={link}
        className={`block pb-[1px] ${
          isFlatDetailPage ? 'text-[#1C1C1E]' : 'text-white'
        } transition-all duration-300`}
      >
        {text}
        <span
          className={`absolute bottom-0 left-1/2 w-0 h-[1px] bg-${
            isFlatDetailPage ? 'black' : 'white'
          } transition-all duration-300 group-hover:w-full group-hover:left-0`}
        />
      </Link>
    </li>
  );
}