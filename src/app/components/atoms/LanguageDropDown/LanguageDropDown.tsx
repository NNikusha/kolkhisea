import React, { useState } from "react";

const languages = ["Eng", "Geo", "Rus"];

const LanguageDropDown = () => {
  const [selectedLang, setSelectedLang] = useState<string>("Eng");

  return (
    <div className="flex flex-col gap-8 cursor-pointer select-none">
      <div className="text-[#7E7E7E] uppercase">Language</div>
      <div className="flex flex-col gap-4">
        {languages.map((lang) => (
          <div
            key={lang}
            onClick={() => setSelectedLang(lang)}
            className={`text-[24px] transition-all ${
              selectedLang === lang
                ? "font-extrabold text-white"
                : "font-normal text-[#818181]"
            }`}
          >
            {lang}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageDropDown;
