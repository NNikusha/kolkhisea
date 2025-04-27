'use client'
import React, { useState } from 'react'
import CountrySelector from '../../atoms/CountrySelector/CountrySelector'
import InputField from '../../atoms/InputField/InputField'
import RussiaFlag from '@/app/assets/RussiaFlag.svg'
import GeorgiaFlag from '@/app/assets/GeorgiaFlag.svg'
import USAFlag from '@/app/assets/USAFlag.svg'

const countries = [
  { name: 'United States', code: '+1', flag: USAFlag },
  { name: 'Russia', code: '+7', flag: RussiaFlag },
  { name: 'Georgia', code: '+995', flag: GeorgiaFlag },
]

const GetInTouchForm = () => {
  const [selectedCountry, setSelectedCountry] = useState<null | typeof countries[0]>(null)

  return (
    <form className="sm:pt-[40px] pt-[32px] sm:max-w-[425px] sm:text-[16px] text-[14px]">
      <InputField
        label="Your name"
        id="fullName"
        placeholder=""
        inputMode="text"
        onInput={(e) => {
          e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s]/g, '')
        }}
      />

      <div className="pb-[32px]">
        <label htmlFor="telephone" className="block sm:text-[16px] text-[14px] font-normal text-[#1C1C1E] pb-[8px]">
          Telephone number
        </label>
        <div className="flex items-center border border-[#E3E3E3] rounded-[8px] px-4 py-3 bg-white focus-within:border-[#1C1C1E]">
          <CountrySelector
            countries={countries}
            selectedCountry={selectedCountry}
            onSelect={setSelectedCountry}
          />
          <input
            type="tel"
            id="telephone"
            name="telephone"
            inputMode="numeric"
            pattern="[0-9]*"
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '')
            }}
            className="flex-1 border-none outline-none pl-4 text-[#1C1C1E] placeholder-[#D3D3D3]"
            placeholder="(000) 000 00 00"
          />
        </div>
      </div>
    </form>
  )
}

export default GetInTouchForm