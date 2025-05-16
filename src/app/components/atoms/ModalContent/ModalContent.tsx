"use client";

import React, { useState } from 'react';
import Button from '@/app/components/atoms/Button/Button';
import PopUpForm from '../PopUpForm/PopUpForm';
import { saveContact } from '@/app/hooks/axios';
import { useTranslations } from 'next-intl';

interface ModalContentProps {
  onSuccess: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ onSuccess }) => {

  const t = useTranslations('Language');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert(t('NameError'));
      return;
    }

    if (!phoneNumber.trim()) {
      alert(t('PhoneError'));
      return;
    }

    const rawNumber = phoneNumber.replace(/\D/g, "");
    if (rawNumber.length < 7) {
      alert(t('ShortPhoneError'));
      return;
    }

    try {
      const formattedPhone = countryCode + rawNumber;

      await saveContact({
        name: name,
        phone_number: formattedPhone,
      });

      setName("");
      setPhoneNumber("");
      setCountryCode("+1");

      onSuccess();
    } catch (error) {
      console.error("Error sending form:", error);
      alert(t('RequestError'));
    }
  };

  return (
    <div>

      <h1 className='text-[#000000] sm:text-[32px] text-[18px] font-normal leading-[130%] pt-[56px]'>
        {t('ModalTitle')}
      </h1>
      <p className='font-normal sm:text-[16px] text-[14px] leading-[150%] text-[#3D3D3D] pt-4'>
        {t('ModalDescription')}
      </p>

      <PopUpForm
        name={name}
        onNameChange={setName}
        phoneNumber={phoneNumber}
        onPhoneNumberChange={setPhoneNumber}
        namePlaceholder={t('NamePlaceholder')}
        phonePlaceholder={t('PhonePlaceholder')}
      />

      <div>
        <Button
          text={t('SubmitButton')}
          className="gap-[10px]"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ModalContent;
