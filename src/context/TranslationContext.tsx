'use client';

import React, { createContext, useState, useEffect, useCallback } from 'react';
import { getTranslationsFromFirestore } from '@/lib/translations';
import { getMessages } from '@/lib/data'; // We'll get the default messages from here

interface TranslationContextType {
  language: string;
  setLanguage: (language: string) => void;
  translate: (key: string, defaultText: string) => string;
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode; initialLocale: string }> = ({ children, initialLocale }) => {
  const [language, setLanguage] = useState(initialLocale);
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [defaultMessages, setDefaultMessages] = useState<Record<string, any>>({});

  useEffect(() => {
    // Load default English messages on initial load
    const loadDefaultMessages = async () => {
        const messages = await getMessages('en');
        setDefaultMessages(messages);
        setTranslations(messages); // Start with English translations
    };
    loadDefaultMessages();
  }, []);

  useEffect(() => {
    // Fetch translations from Firestore when language changes
    const loadTranslations = async () => {
      if (language === 'en') {
        setTranslations(defaultMessages);
        return;
      }
      
      const firestoreTranslations = await getTranslationsFromFirestore(language);
      // Merge Firestore translations with English defaults as a fallback
      setTranslations({ ...defaultMessages, ...firestoreTranslations });
    };

    if (language !== initialLocale || Object.keys(defaultMessages).length > 0) {
        loadTranslations();
    }
  }, [language, initialLocale, defaultMessages]);
  
  const translate = useCallback((key: string, defaultText: string): string => {
      // Simple key lookup for now, can be expanded for nested keys
      return translations[key] || defaultText;
  }, [translations]);


  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};
