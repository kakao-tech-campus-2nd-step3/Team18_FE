import { createBrowserRouter } from 'react-router-dom';
import ROUTE_PATH from './path';
import { SignIn, SignUp } from '@pages/auth';
import App from '@/App';
import Recruit from '@/pages/recruit';
import VisaRegistration from '@/pages/employee/visaRegistration';
import PostNotice from '@/pages/employer/postNotice/PostNotice';
import Home from '@/pages/home';
import ApplyGuide from '@/pages/apply/applyguide/ApplyGuide';
import ApplyPage from '@/pages/apply/applypage/ApplyPage';
import EmployerMyAccount from '@/pages/employer/myAccount';

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
      { path: ROUTE_PATH.POST_NOTICE, element: <PostNotice /> },
      { path: ROUTE_PATH.APPLY.GUIDE, element: <ApplyGuide /> },
      { path: ROUTE_PATH.APPLY.APPLYPAGE, element: <ApplyPage /> },
      { path: ROUTE_PATH.RECRUIT, element: <Recruit /> },
      { path: ROUTE_PATH.EMPLOYEE.VISA_REGISTRATION, element: <VisaRegistration /> },
      { path: ROUTE_PATH.POST_NOTICE, element: <PostNotice /> },
      { path: ROUTE_PATH.EMPLOYER.MY_ACCOUNT, element: <EmployerMyAccount /> },
    ],
  },
]);
