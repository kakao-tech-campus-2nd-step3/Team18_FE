import { ReactNode } from 'react';
import GlobalStylesProvider from './GlobalStylesProvider/index.provider';

export default function AppProviders({ children }: { children: ReactNode }) {
  return <GlobalStylesProvider>{children}</GlobalStylesProvider>;
}
