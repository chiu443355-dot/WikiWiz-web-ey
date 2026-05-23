'use client';

import { useLanguage } from '@/lib/store/language';
import { translations } from '@/data/translations';

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
      if (!value) return key; // Return key if not found
    }
    
    return value || key;
  };

  return { t, language };
}
