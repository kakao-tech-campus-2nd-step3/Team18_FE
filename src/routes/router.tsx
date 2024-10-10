import { createBrowserRouter } from 'react-router-dom';
import ROUTE_PATH from './path';
import { SignIn, SignUp } from '@pages/auth';
import App from '@/App';
import Recruit from '@/pages/recruit';
import VisaRegistration from '@/pages/visaRegistration';
import { PostNotice } from '@/pages/employer/postNotice';
import Home from '@/pages/home';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: <App />,
    children: [
      { path: ROUTE_PATH.HOME, element: <Home /> },
      { path: ROUTE_PATH.AUTH.SIGN_IN, element: <SignIn /> },
      {
        path: ROUTE_PATH.AUTH.SIGN_UP,
        element: <SignUp />,
      },
      { path: ROUTE_PATH.RECRUIT, element: <Recruit /> },
      { path: ROUTE_PATH.VISA_REGISTRATION, element: <VisaRegistration /> },
      { path: ROUTE_PATH.POST_NOTICE, element: <PostNotice /> },
    ],
  },
]);
