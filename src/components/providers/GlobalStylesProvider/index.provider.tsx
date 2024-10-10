import { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from './GlobalStyles';
import theme from '@/assets/theme';

interface Props {
  children: ReactNode;
}

const GlobalStylesProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default GlobalStylesProvider;
