import Link from 'next/link'
import React from 'react'

interface NavListProps{
    text:string,
    link:string
}

export default function NavList({text,link}:NavListProps) {
  return (
            <li>
              <Link href={link} />
              {text}
            </li>
  )
}
