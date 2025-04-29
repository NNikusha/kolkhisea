'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import DefaultFlag from '@/app/assets/Globe.svg'

type Country = {
  name: string
  code: string
  flag: string
}

type Props = {
  countries: Country[]
  selectedCountry: Country | null
  onSelect: (country: Country) => void
}

const CountrySelector = ({ countries, selectedCountry, onSelect }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 focus:outline-none cursor-pointer pr-2 border-r border-[#E3E3E3]"
      >
        <Image
          src={selectedCountry?.flag || DefaultFlag}
          alt="Selected Country"
          width={20}
          height={15}
        />
        <span className="text-[#1C1C1E] text-sm">{selectedCountry?.code || '+0'}</span>
        <svg
          className={`w-4 h-4 text-[#1C1C1E] transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`absolute left-0 top-[35px] bg-white border border-[#E3E3E3] rounded-md shadow-md z-20 w-[190px] transition-all duration-300 ease-in-out transform origin-top
          ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
        `}
      >
        {countries.map((country) => (
          <div
            key={country.name}
            className="px-4 py-2 hover:bg-[#F5F5F5] cursor-pointer flex items-center gap-2"
            onClick={() => {
              onSelect(country)
              setIsOpen(false)
            }}
          >
            <Image src={country.flag} alt={country.name} width={20} height={15} />
            <span className="text-[#1C1C1E] text-sm">
              {country.name} ({country.code})
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountrySelector