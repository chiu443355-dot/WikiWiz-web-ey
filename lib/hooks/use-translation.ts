'use client';

import { useLanguage } from '@/lib/store/language';
import { translations } from '@/data/translations';

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: string): string => {
    // Get translations for current language
    const langTranslations = translations[language] as Record<string, string>;
    const enTranslations = translations['en'] as Record<string, string>;
    
    // Try to get from current language first
    if (langTranslations && langTranslations[key]) {
      return langTranslations[key];
    }
    
    // Fallback to English if not found in current language
    if (language !== 'en' && enTranslations && enTranslations[key]) {
      return enTranslations[key];
    }
    
    // Return the key itself if not found
    return key;
  };

  return { t, language };
}
