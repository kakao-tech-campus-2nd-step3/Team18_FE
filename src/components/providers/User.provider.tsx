import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

import { UserData } from '@/types';
import { userLocalStorage } from '@/utils/storage';

type UserContextType = {
  user: UserData | undefined;
  setUser: React.Dispatch<React.SetStateAction<UserData | undefined>>;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | undefined>(() => userLocalStorage.getUser());

  useEffect(() => {
    const changeUser = () => {
      const updatedUser = userLocalStorage.getUser();
      setUser(updatedUser);
    };

    window.addEventListener('storage', changeUser);

    return () => window.removeEventListener('storage', changeUser);
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
