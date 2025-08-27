'use client';

import React, { createContext, useState, useCallback, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { AbstractIntlMessages } from 'next-intl';

interface TranslationContextType {
  language: string;
  setLanguage: (language: string) => void;
  translate: (key: string, defaultText?: string) => string;
}

const getNestedValue = (obj: any, key: string): string | undefined => {
  if (!obj || !key) return undefined;
  return key.split('.').reduce((o, i) => (o ? o[i] : undefined), obj);
};

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode; initialLocale: string, messages: AbstractIntlMessages }> = ({ children, initialLocale, messages }) => {
  const [language, setInternalLanguage] = useState(initialLocale);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setInternalLanguage(initialLocale);
  }, [initialLocale]);

  const setLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    
    setInternalLanguage(newLocale);
    router.push(newPath);
  };
  
  const translate = useCallback((key: string, defaultText?: string): string => {
      const translatedValue = getNestedValue(messages, key);
      return translatedValue || defaultText || key;
  }, [messages]);


  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};
