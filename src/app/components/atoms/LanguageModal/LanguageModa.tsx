import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectLang: (lang: "EN" | "KA" | "RU") => void;
}

export default function LanguageModal({ isOpen, onClose, onSelectLang }: Props) {
  if (!isOpen) return null;

  // Language options with proper codes and display labels
  const languageOptions: Array<{code: "EN" | "KA" | "RU", label: string}> = [
    { code: "EN", label: "English" },
    { code: "KA", label: "Georgian" },
    { code: "RU", label: "Russian" }
  ];

  return (
    <div className="absolute top-full right-0 mt-2 bg-white rounded-md shadow-xl z-50 w-32 border border-gray-200">
      <ul className="flex flex-col text-sm text-gray-800">
        {languageOptions.map(({ code, label }) => (
          <li
            key={code}
            onClick={() => {
              onSelectLang(code);
              onClose();
            }}
            className="cursor-pointer px-4 py-2 hover:bg-gray-100"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}