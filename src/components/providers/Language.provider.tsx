import { userLocalStorage } from '@/utils/storage';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>(() => userLocalStorage.getLanguage() || 'korean');

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'language') {
        const newLanguage = event.newValue ? JSON.parse(event.newValue) : 'korean';
        setLanguage(newLanguage);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const updateLanguage = (newLanguage: string) => {
    userLocalStorage.setLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
