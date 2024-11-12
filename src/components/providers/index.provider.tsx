import { ReactNode } from 'react';
import GlobalStylesProvider from './GlobalStylesProvider/index.provider';
import ModalsProvider from './Modals.provider';
import Modals from '../common/Modal/Modals';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/apis/instance';
import { UserProvider } from './User.provider';
import { LanguageProvider } from './Language.provider';

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <GlobalStylesProvider>
      <QueryClientProvider client={queryClient}>
        <LanguageProvider>
          <ModalsProvider>
            <UserProvider>
              {children}
              <Modals />
            </UserProvider>
          </ModalsProvider>
        </LanguageProvider>
      </QueryClientProvider>
    </GlobalStylesProvider>
  );
}
