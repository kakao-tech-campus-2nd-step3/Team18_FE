import { ReactNode } from 'react';
import GlobalStylesProvider from './GlobalStylesProvider/index.provider';
import ModalsProvider from './Modals.provider';
import Modals from '../common/Modal/Modals';

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <GlobalStylesProvider>
      <ModalsProvider>
        {children}
        <Modals />
      </ModalsProvider>
    </GlobalStylesProvider>
  );
}
