import AppProviders from '@components/providers';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <AppProviders>
      <Outlet />
    </AppProviders>
  );
}

export default App;
