"use client";

import React from 'react';
import InputField from '../../atoms/InputField/InputField';
import { useTranslations } from 'next-intl';

type PopUpFormProps = {
  name: string;
  onNameChange: (value: string) => void;
  phoneNumber: string;
  onPhoneNumberChange: (value: string) => void;
  namePlaceholder?: string;
  phonePlaceholder?: string;
};

const PopUpForm: React.FC<PopUpFormProps> = ({
  name,
  onNameChange,
  phoneNumber,
  onPhoneNumberChange,
  namePlaceholder,
  phonePlaceholder,
}) => {
  const t = useTranslations('Language');
  
  return (
    <form className="sm:pt-[40px] pt-[32px] sm:max-w-[425px] sm:text-[16px] text-[14px]" onSubmit={(e) => e.preventDefault()}>
      <InputField
        label={t('NameLabel')}
        id="fullName"
        placeholder={namePlaceholder || t('NamePlaceholder')}
        inputMode="text"
        value={name}
        onChange={(e) => onNameChange(e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
      />

      <div className="pb-[32px]">
        <label htmlFor="telephone" className="block sm:text-[16px] text-[14px] font-normal text-[#1C1C1E] pb-[8px]">
          {t('PhoneLabel')}
        </label>
        <div className="flex items-center border border-[#E3E3E3] rounded-[8px] px-4 py-3 bg-white focus-within:border-[#1C1C1E]">
          <span className="text-[#1C1C1E]">+</span>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            inputMode="numeric"
            value={phoneNumber}
            onChange={(e) => onPhoneNumberChange(e.target.value.replace(/\D/g, ''))}
            className="flex-1 border-none outline-none text-[#1C1C1E] placeholder-[#D3D3D3] pl-1"
            placeholder={phonePlaceholder || t('PhonePlaceholder')}
          />
        </div>
      </div>
    </form>
  );
};

export default PopUpForm;