"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const LanguageDropDown = () => {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('Language');
  
  const getCurrentLang = () => {
    const segments = pathname.split('/');
    if (segments.length > 1 && ["en", "ka", "ru"].includes(segments[1].toLowerCase())) {
      return segments[1].toLowerCase();
    }
    return "en";
  };
  
  const currentLang = getCurrentLang();
  
  const languages = [
    { code: "en", label: "Eng" },
    { code: "ka", label: "Geo" },
    { code: "ru", label: "Rus" }
  ];

  const handleSelectLang = (langCode: string) => {
    const segments = pathname.split('/');
    
    if (segments.length > 1 && ["en", "ka", "ru"].includes(segments[1].toLowerCase())) {
      segments[1] = langCode.toLowerCase();
    } else {
      segments.splice(1, 0, langCode.toLowerCase());
    }

    const newPath = segments.join('/');
    router.push(newPath);
  };

  return (
    <div className="flex flex-col gap-8 cursor-pointer select-none">
      <div className="text-[#7E7E7E] uppercase">{t('Language')}</div>
      <div className="flex flex-col gap-4">
        {languages.map((lang) => (
          <div
            key={lang.code}
            onClick={() => handleSelectLang(lang.code)}
            className={`text-[24px] transition-all ${
              currentLang === lang.code.toLowerCase()
                ? "font-extrabold text-white"
                : "font-normal text-[#818181]"
            }`}
          >
            {lang.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageDropDown;