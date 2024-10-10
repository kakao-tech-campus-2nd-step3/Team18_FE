import AppProviders from '@components/providers/index.provider';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <AppProviders>
      <Outlet />
    </AppProviders>
  );
}

export default App;
