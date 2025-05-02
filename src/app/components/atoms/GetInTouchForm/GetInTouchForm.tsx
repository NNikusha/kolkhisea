"use client";
import React from "react";
import InputField from "../../atoms/InputField/InputField";
import { useTranslations } from "next-intl";

type GetInTouchFormProps = {
  nameValue: string;
  onNameChange: (value: string) => void;
  phoneValue: string;
  onPhoneChange: (value: string) => void;
  namePlaceholder?: string;
  phonePlaceholder?: string;
};

const GetInTouchForm = ({
  nameValue,
  onNameChange,
  phoneValue,
  onPhoneChange,
  namePlaceholder = "Enter your name",
  phonePlaceholder = "Enter your phone number",
}: GetInTouchFormProps) => {
  const t = useTranslations("Language");

  return (
    <div className="sm:pt-[40px] pt-[32px] sm:max-w-[425px] sm:text-[16px] text-[14px]">
      <InputField
        label={t("NameLabel")}
        id="fullName"
        placeholder={namePlaceholder}
        inputMode="text"
        value={nameValue}
        onChange={(e) => {
          const value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); 
          onNameChange(value);
        }}
      />

      <div className="pb-[32px]">
        <label
          htmlFor="telephone"
          className="block sm:text-[16px] text-[14px] font-normal text-[#1C1C1E] pb-[8px]"
        >
          {t("PhoneLabel")}
        </label>
        <div className="flex items-center border border-[#E3E3E3] rounded-[8px] px-4 py-3 bg-white focus-within:border-[#1C1C1E]">
          <span className="text-[#1C1C1E]">+</span>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            inputMode="numeric"
            value={phoneValue}
            onChange={(e) => {
              const numericValue = e.target.value.replace(/\D/g, '');
              onPhoneChange(numericValue);
            }}
            className="flex-1 border-none outline-none text-[#1C1C1E] placeholder-[#D3D3D3] pl-1"
            placeholder={phonePlaceholder}
          />
        </div>
      </div>
    </div>
  )
}

export default GetInTouchForm