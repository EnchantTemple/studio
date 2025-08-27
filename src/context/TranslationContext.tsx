'use client';

import React, { createContext, useState, useEffect, useCallback } from 'react';
import { translateText } from '@/ai/flows/translate-flow';

interface TranslationContextType {
  language: string;
  setLanguage: (language: string) => void;
  translate: (text: string) => Promise<string>;
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode; initialLocale: string }> = ({ children, initialLocale }) => {
  const [language, setLanguage] = useState(initialLocale);
  const [cache, setCache] = useState<Record<string, string>>({});

  useEffect(() => {
    // When language changes, clear the cache.
    setCache({});
  }, [language]);

  const translate = useCallback(async (text: string): Promise<string> => {
    if (language === 'en') {
        return text;
    }

    const cacheKey = `${language}:${text}`;
    if (cache[cacheKey]) {
      return cache[cacheKey];
    }

    try {
      const translatedText = await translateText({ text, targetLanguage: language });
      setCache(prev => ({ ...prev, [cacheKey]: translatedText }));
      return translatedText;
    } catch (error) {
      console.error('Translation failed:', error);
      return text; // Fallback to original text
    }
  }, [language, cache]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};
