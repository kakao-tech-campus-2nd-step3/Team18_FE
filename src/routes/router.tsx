import { createBrowserRouter } from 'react-router-dom';
import ROUTE_PATH from './path';
import SignIn from '@pages/auth/SignIn';
import SignUp from '@pages/auth/SignUp';
import LoadingPage from '@/pages/auth/Loading';
import App from '@/App';
import Recruit from '@/pages/recruit';
import RegisterVisa from '@/pages/registerVisa/RegisterVisa';
import PostNotice from '@/pages/postNotice/PostNotice';
import Home from '@/pages/home';
import ApplyGuide from '@/pages/apply/applyguide/ApplyGuide';
import ApplyPage from '@/pages/apply/applypage/ApplyPage';
import Resume from '@/pages/resume/Resume';
import EmployeeMyPage from '@/pages/myPage/employee/EmployeeMyPage';
import RegisterSign from '@/pages/registerSign/RegisterSign';
import RegisterCompany from '@/pages/registerCompany/RegisterCompany';
import EmployerMyPage from '@/pages/myPage/employer/EmPloyerMyPage';
import EmployeeContract from '@/pages/contract/EmployeeContract/EmployeeContract';
import EmployerContract from '@/pages/contract/EmployerContract/EmployerContract';
import MyCompanyPage from '@/pages/myCompanyPage/MyCompanyPage';
import ApplicantsPage from '@/pages/applicantsPage/ApplicantsPage';
import { RequireAuth } from './guards/RequireAuth';

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
      {
        path: ROUTE_PATH.AUTH.LOADING,
        element: <LoadingPage />,
      },
      { path: ROUTE_PATH.RECRUIT, element: <Recruit /> },
      { path: ROUTE_PATH.POST_NOTICE, element: <PostNotice /> },
      { path: ROUTE_PATH.APPLY.GUIDE, element: <ApplyGuide /> },
      { path: ROUTE_PATH.APPLY.APPLYPAGE, element: <ApplyPage /> },
      { path: ROUTE_PATH.RECRUIT, element: <Recruit /> },
      { path: ROUTE_PATH.REGISTER_VISA, element: <RegisterVisa /> },
      {
        path: ROUTE_PATH.EMPLOYEE.EMPLOYEE_PAGE,
        element: (
          <RequireAuth expectedType="employee">
            <EmployeeMyPage />
          </RequireAuth>
        ),
      },
      { path: ROUTE_PATH.POST_NOTICE, element: <PostNotice /> },
      { path: ROUTE_PATH.MY_COMPANY, element: <MyCompanyPage /> },
      { path: ROUTE_PATH.APPLICANTS, element: <ApplicantsPage /> },
      { path: ROUTE_PATH.RESUME, element: <Resume /> },
      {
        path: ROUTE_PATH.MY_PAGE.EMPLOYER,
        element: (
          <RequireAuth expectedType="employer">
            <EmployerMyPage />
          </RequireAuth>
        ),
      },
      { path: ROUTE_PATH.REGISTERSIGN, element: <RegisterSign /> },
      { path: ROUTE_PATH.REGISTERCOMPANY, element: <RegisterCompany /> },
      { path: ROUTE_PATH.CONTRACT.EMPLOYEE, element: <EmployeeContract /> },
      { path: ROUTE_PATH.CONTRACT.EMPLOYER, element: <EmployerContract /> },
    ],
  },
]);
