import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'od' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    'seeLiveDemo': 'See Live Demo'
  },
  od: {
    'seeLiveDemo': 'ଲାଇଭ୍ ଡେମୋ ଦେଖନ୍ତୁ'
  },
  hi: {
    'seeLiveDemo': 'लाइव डेमो देखें'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
