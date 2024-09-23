import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import StyleProvider from '@assets/styles/StyleProvider';

createRoot(document.getElementById('root')!).render(
  <StyleProvider>
    <App />
  </StyleProvider>,
);
