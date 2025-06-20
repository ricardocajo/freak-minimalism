"use client";

import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation('common');
  const valuesList = t('values.list', { returnObjects: true }) as { value: string }[];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-8">{t('welcome')}</h1>
        
        <h2>{t('values.title')}</h2>
        <ul>
          {valuesList.map((valueObj, index) => (
            <li key={index}>{valueObj.value}</li>
          ))}
        </ul>

        <h2>{t('mission.title')}</h2>
        <p>{t('mission.content')}</p>
      </div>
    </div>
  );
}
