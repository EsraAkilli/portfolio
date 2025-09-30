import { useMemo } from 'react';
import { Language } from '../types';
import * as en from '../locales/en';
import * as tr from '../locales/tr';

export const useTranslation = (lang: Language) => {
  const translations = useMemo(() => {
    return lang === 'en' ? en : tr;
  }, [lang]);

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return value;
  };

  return { t, lang };
};
