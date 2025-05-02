"use client";
import React, { useState } from "react";
import Image from "next/image";
import FlowersImage from "@/app/assets/FlowersImage.png";
import GetInTouchForm from "../../atoms/GetInTouchForm/GetInTouchForm";
import Button from "../../atoms/Button/Button";
import { saveContact } from "@/app/hooks/axios";
import GetInTouchSuccess from "../GetInTouchSuccess/GetInTouchSuccess";
import { useTranslations } from "next-intl";

const GetInTouchSection = () => {
  const t = useTranslations("Language");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSendRequest = async () => {
    if (!name.trim()) {
      alert(t("NameError"))
      return
    }

    if (!phoneNumber.trim()) {
      alert(t("PhoneError"))
      return
    }

    const rawNumber = phoneNumber.replace(/\D/g, '');
    if (rawNumber.length < 7) {
      alert(t("ShortPhoneError"))
      return
    }

    setIsSubmitting(true)

    try {
      const formattedPhoneNumber = `+${phoneNumber}`

      await saveContact({
        name: name,
        phone_number: formattedPhoneNumber
      })

      setIsSuccess(true)
      setName('')
      setPhoneNumber('')
      setTimeout(() => {
        setIsSubmitting(false)
      }, 500)
    } catch (error) {
      console.error('Error sending contact request:', error)
      alert(t('RequestError'));
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#FFFFFF] w-full relative">
      <div className="container mx-auto flex sm:flex-row flex-col justify-between">
        <div className="px-[16px] lg:pl-[108px] xl:pl-[108px]">
          <h1 className="sm:text-[48px] text-[24px] font-normal text-[#1C1C1E] pt-[50px]">
            {t("Title")}
          </h1>
          <p className="text-[#3D3D3D] font-normal pt-4 sm:text-[16px] text-[14px]">
            {t("Description")}
          </p>
          <GetInTouchForm 
            nameValue={name}
            onNameChange={setName}
            phoneValue={phoneNumber}
            onPhoneChange={setPhoneNumber}
            namePlaceholder={t("NamePlaceholder")}
            phonePlaceholder={t("PhonePlaceholder")}
          />
          <div className='xl:pb-[64px] pb-[32px]'>
            {isSubmitting ? (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#CB684D]"></div>
              </div>
            ) : (
              <Button
                text={t("ButtonText")}
                disabled={isSubmitting}
                className="gap-[10px] lg:text-[16px] text-[14px] sm:w-[203px] w-full sm:justify-start justify-center"
                onClick={handleSendRequest}
              />
            )}
          </div>
        </div>

        <div className="flex px-[0px] lg:pr-[108px] flex justify-center items-center">
          <div className="bg-[#285260] h-full 2xl:flex hidden w-[24px]"></div>
          <div className="">
            <div className="bg-[#285260] h-[20px] 2xl:hidden w-full"></div>
            <div className="w-full 2xl:h-[548px] ">
              <Image src={FlowersImage} alt="Flowers Image" />
            </div>
          </div>
        </div>
      </div>
      {isSuccess && <GetInTouchSuccess onClose={() => setIsSuccess(false)} />}
    </div>
  )
}

export default GetInTouchSection