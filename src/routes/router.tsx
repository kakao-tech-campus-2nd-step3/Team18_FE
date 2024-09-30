import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_PATH } from './path';
import App from '@/App';
import SignIn from '@/pages/auth/SignIn';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: <App />,
    children: [{ path: ROUTE_PATH.SIGN_IN, element: <SignIn /> }],
  },
]);
