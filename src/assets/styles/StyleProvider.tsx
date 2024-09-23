import { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from './global/GlobalStyles';
import theme from './theme';

interface Props {
  children: ReactNode;
}

const StyleProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
