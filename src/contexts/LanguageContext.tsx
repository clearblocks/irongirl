import React, { createContext, useContext, useState, useCallback } from 'react';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  translate: <T extends string | string[]>(key: string) => T;
  translateHTML: (key: string) => TrustedHTML;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const browserLanguage = navigator.language ? navigator.language.split('-')[0] : 'nl'
  const [language, setLanguage] = useState<string>(browserLanguage);

  const translate = useCallback(<T extends string | string[]>(key: string): T => {
    const k = key.split(".");
    if (k.length !== 2) {
      throw new Error(`Invalid translation key ${key}, needs to be two parts: category.key`);
    }

    // Import translations dynamically to avoid circular dependencies
    const translations = require("../assets/json/translations.json");

    // Check if translation exists for current language
    if (translations[k[0]]?.[k[1]]?.[language]) {
      return translations[k[0]][k[1]][language] as T;
    }
    
    throw Error(`Translation missing: ${key}`);
  }, [language]);

  const translateHTML = useCallback((key: string): TrustedHTML => {
    return translate(key) as unknown as TrustedHTML
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate, translateHTML }}>
      {children}
    </LanguageContext.Provider>
  );


};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};