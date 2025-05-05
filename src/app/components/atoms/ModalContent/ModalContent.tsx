'use client';

import React, { useState } from 'react';
import Button from '@/app/components/atoms/Button/Button';
import PopUpForm from '../PopUpForm/PopUpForm';
import { saveContact } from '@/app/hooks/axios';

interface ModalContentProps {
  onSuccess: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ onSuccess }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+1');

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!phoneNumber.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    const rawNumber = phoneNumber.replace(/\D/g, '');
    if (rawNumber.length < 7) {
      alert("Phone number is too short.");
      return;
    }

    try {
      const formattedPhone = countryCode + rawNumber;

      await saveContact({
        name: name,
        phone_number: formattedPhone,
      });

      setName('');
      setPhoneNumber('');
      setCountryCode('+1');

      onSuccess();
    } catch (error) {
      console.error("Error sending form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <h1 className='text-[#000000] sm:text-[32px] text-[18px] font-normal leading-[130%] pt-[56px]'>
        WOULD YOU LIKE TO LEARN MORE ABOUT KOLKHISEA?
      </h1>
      <p className='font-normal sm:text-[16px] text-[14px] leading-[150%] text-[#3D3D3D] pt-4'>
        Please provide your contact information, and our specialists will be in touch to discuss the details.
      </p>

      <PopUpForm
        name={name}
        onNameChange={setName}
        phoneNumber={phoneNumber}
        onPhoneNumberChange={setPhoneNumber}
      />

      <div>
        <Button
          text='Submit'
          className="gap-[10px]"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ModalContent;