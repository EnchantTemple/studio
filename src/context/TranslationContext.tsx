'use client';

import React, { createContext, useState, useEffect, useCallback } from 'react';
import { getTranslationsFromFirestore } from '@/lib/translations';
import defaultMessages from '../../messages/en.json'; // Import English messages as the base

interface TranslationContextType {
  language: string;
  setLanguage: (language: string) => void;
  translate: (key: string, defaultText?: string) => string;
}

// Helper to get nested values from an object using a dot-notation string
const getNestedValue = (obj: any, key: string): string | undefined => {
  return key.split('.').reduce((o, i) => (o ? o[i] : undefined), obj);
};

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode; initialLocale: string }> = ({ children, initialLocale }) => {
  const [language, setLanguage] = useState(initialLocale);
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch translations from Firestore when language changes
    const loadTranslations = async () => {
      setIsLoading(true);
      if (language === 'en') {
        setTranslations(defaultMessages);
      } else {
        const firestoreTranslations = await getTranslationsFromFirestore(language);
        // Merge Firestore translations with English defaults as a fallback for missing keys
        setTranslations({ ...defaultMessages, ...firestoreTranslations });
      }
      setIsLoading(false);
    };

    loadTranslations();
  }, [language]);
  
  const translate = useCallback((key: string, defaultText?: string): string => {
      if (isLoading) return defaultText || ''; // Return default text or empty string while loading
      // Use the helper to look up nested keys
      const translatedValue = getNestedValue(translations, key);
      return translatedValue || defaultText || key;
  }, [translations, isLoading]);


  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};
