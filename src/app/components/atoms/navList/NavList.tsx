import Link from 'next/link'
import React from 'react'

interface NavListProps {
  text: string
  link: string
}

export default function NavList({ text, link }: NavListProps) {
  return (
    <li className="relative group pb-1">
      <Link href={link} className="block pb-[1px]">
        {text}
        <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bottom-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0" />
      </Link>
    </li>
  )
}
