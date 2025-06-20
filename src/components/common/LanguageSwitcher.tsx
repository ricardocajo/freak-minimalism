"use client";

import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation('common');
  const currentLocale = i18n.language;

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('pt')}
        className={`px-3 py-1 rounded-md ${currentLocale === 'pt' ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200'} dark:bg-gray-800 dark:hover:bg-gray-700`}
      >
        PT
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md ${currentLocale === 'en' ? 'bg-gray-200' : 'bg-gray-100 hover:bg-gray-200'} dark:bg-gray-800 dark:hover:bg-gray-700`}
      >
        EN
      </button>
    </div>
  );
}
