import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_PATH } from './path';
import App from '@/App';
import SignIn from '@/pages/auth/SignIn';
import Recruit from '@/pages/recruit';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: <App />,
    children: [
      { path: ROUTE_PATH.SIGN_IN, element: <SignIn /> },
      { path: ROUTE_PATH.Recruit, element: <Recruit /> },
    ],
  },
]);
