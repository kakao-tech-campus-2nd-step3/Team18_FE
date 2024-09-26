import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AppProviders from '@components/providers/index.tsx';

createRoot(document.getElementById('root')!).render(
  <AppProviders>
    <App />
  </AppProviders>,
);
