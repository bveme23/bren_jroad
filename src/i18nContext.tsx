'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLang, translations } from './i18n';

interface I18nContextType {
  currentLang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getInitialLang(): SupportedLang {
  if (typeof window === 'undefined') {
    return 'ja';
  }
  
  const stored = localStorage.getItem('lang');
  if (stored && (stored === 'en' || stored === 'fr' || stored === 'ja' || stored === 'pt')) {
    return stored as SupportedLang;
  }
  
  return 'ja';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<SupportedLang>(getInitialLang);

  useEffect(() => {
    // Sync with localStorage on mount
    const stored = localStorage.getItem('lang');
    if (stored && (stored === 'en' || stored === 'fr' || stored === 'ja' || stored === 'pt')) {
      setCurrentLang(stored as SupportedLang);
    }
  }, []);

  const setLang = (lang: SupportedLang) => {
    setCurrentLang(lang);
    localStorage.setItem('lang', lang);
  };

  const t = (key: string): string => {
    const langTranslations = translations[currentLang];
    return langTranslations[key] || translations['ja'][key] || key;
  };

  return (
    <I18nContext.Provider value={{ currentLang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

