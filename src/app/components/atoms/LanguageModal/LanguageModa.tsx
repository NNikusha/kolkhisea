import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectLang: (lang: "EN" | "KA" | "RU") => void;
  selectedLang: "EN" | "KA" | "RU";
}

export default function LanguageModal({ isOpen, onClose, onSelectLang, selectedLang }: Props) {
  if (!isOpen) return null;

  const languageOptions: Array<{ code: "EN" | "KA" | "RU"; label: string }> = [
    { code: "EN", label: "Eng" },
    { code: "KA", label: "Geo" },
    { code: "RU", label: "Rus" },
  ];

  const filteredLanguages = languageOptions.filter(({ code }) => code !== selectedLang);

  return (
    <div className="absolute top-full right-0 mt-2 bg-white rounded-[16px] shadow-xl z-50 border border-gray-200">
      <ul className="flex flex-col px-[24px] text-sm text-gray-800 text-center w-[96px] h-[128px]">
        {filteredLanguages.map(({ code, label }, index) => (
          <li
            key={code}
            onClick={() => {
              onSelectLang(code);
              onClose();
            }}
            className={`cursor-pointer py-[24px]  ${index === 0 ? "border-b border-[#B4B4B4]" : ""}`}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
