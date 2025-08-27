'use client';

import React, { createContext, useState, useCallback, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { AbstractIntlMessages } from 'next-intl';
import { getTranslationsFromFirestore } from '@/lib/translations';

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

export const TranslationProvider: React.FC<{ children: React.ReactNode; initialLocale: string }> = ({ children, initialLocale }) => {
  const [language, setInternalLanguage] = useState(initialLocale);
  const [messages, setMessages] = useState<AbstractIntlMessages>({});
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const newLocale = pathname.split('/')[1] || initialLocale;
    setInternalLanguage(newLocale);
    
    async function loadTranslations() {
      const firestoreMessages = await getTranslationsFromFirestore(newLocale);
      const localMessages = (await import(`../../messages/${newLocale}.json`)).default;
      
      // We deeply merge firestore messages over local messages.
      // This allows Firestore to override or add translations without needing all of them.
      const deepMerge = (target: any, source: any) => {
        for (const key in source) {
          if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], deepMerge(target[key], source[key]))
          }
        }
        Object.assign(target || {}, source)
        return target
      }

      setMessages(deepMerge(localMessages, firestoreMessages));
    }

    loadTranslations();

  }, [pathname, initialLocale]);

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
