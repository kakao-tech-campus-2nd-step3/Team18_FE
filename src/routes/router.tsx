import { createBrowserRouter } from 'react-router-dom';
import ROUTE_PATH from './path';
import SignIn from '@pages/auth/SignIn';
import SignUp from '@pages/auth/SignUp';
import App from '@/App';
import Recruit from '@/pages/recruit';
import VisaRegistration from '@/pages/visaRegistration';
import PostNotice from '@/pages/employer/postNotice/PostNotice';
import Home from '@/pages/home';
import ApplyGuide from '@/pages/apply/applyguide/ApplyGuide';
import ApplyPage from '@/pages/apply/applypage/ApplyPage';
import MyCompany from '@/pages/myCompany';
import Applicants from '@/pages/applicants';
import EmployerMyAccount from '@/pages/myAccount/employer';

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
      { path: ROUTE_PATH.VISA_REGISTRATION, element: <VisaRegistration /> },
      { path: ROUTE_PATH.POST_NOTICE, element: <PostNotice /> },
      { path: ROUTE_PATH.MY_COMPANY, element: <MyCompany /> },
      { path: ROUTE_PATH.APPLICANTS, element: <Applicants /> },
      { path: ROUTE_PATH.MY_ACCOUNT.EMPLOYER, element: <EmployerMyAccount /> },
    ],
  },
]);
