import { UserData } from '@/types';

const STORAGE_KEYS = {
  USER: 'user',
  TOKEN: 'token',
  LANGUAGE: 'language',
};

export const userLocalStorage = {
  getUser: (): UserData | undefined => {
    const user = localStorage.getItem(STORAGE_KEYS.USER);
    return user ? JSON.parse(user) : undefined;
  },
  setUser: (user: UserData) => {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  },
  removeUser: () => {
    localStorage.removeItem(STORAGE_KEYS.USER);
  },

  removeToken: () => {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
  },

  getLanguage: (): string | null => {
    const language = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    return language ? JSON.parse(language).state.selectedOption.value : null;
  },
  setLanguage: (language: string) => {
    const languageObj = JSON.stringify({ state: { selectedOption: { value: language } } });
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, languageObj);
  },
};
