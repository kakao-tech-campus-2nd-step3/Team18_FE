import AppProviders from '@components/providers/index.provider';
import { Outlet } from 'react-router-dom';
import '@/assets/translator/i18n';

function App() {
  return (
    <AppProviders>
      <Outlet />
    </AppProviders>
  );
}

export default App;
