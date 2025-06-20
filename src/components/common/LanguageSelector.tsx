"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
interface Language {
  code: string;
}

const languages: Language[] = [
  {
    code: "pt",
  },
  {
    code: "en",
  },
];

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const [open, setOpen] = useState(false);

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
    setOpen(false);
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="flex items-center px-3 py-1.5 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800">
        <div className="w-6 h-6">
          <img
            src={`/images/flags/${currentLocale === 'pt' ? 'pt' : 'uk'}.svg`}
            alt={`${currentLocale === 'pt' ? 'Portugal' : 'United Kingdom'} flag`}
            className="w-full h-full object-contain"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code)}
            className="flex items-center p-2"
          >
            <div className="w-6 h-6">
              <img
                src={`/images/flags/${language.code === 'pt' ? 'pt' : 'uk'}.svg`}
                alt={`${language.code === 'pt' ? 'Portugal' : 'United Kingdom'} flag`}
                className="w-full h-full object-contain"
              />
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
