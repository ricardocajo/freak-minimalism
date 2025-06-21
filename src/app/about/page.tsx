"use client";

import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation('common');

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-8">{t('about.title')}</h1>
        <div className="text-lg leading-relaxed">
          {t('about.content')}
        </div>
      </div>
    </div>
  );
}
