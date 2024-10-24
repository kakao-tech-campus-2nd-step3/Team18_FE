export const AUTH = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  LOADING: '/loading',
} as const;

export const APPLY = {
  GUIDE: '/applyguide',
  APPLYPAGE: '/apply',
};

export const MY_ACCOUNT = {
  EMPLOYER: '/employer-my-account',
};

export const EMPLOYEE = {
  EMPLOYEE_PAGE: '/employee-my-page',
  VISA_REGISTRATION: '/visa-registration',
} as const;

const ROUTE_PATH = {
  HOME: '/',
  RECRUIT: '/recruit',
  POST_NOTICE: '/post-notice',
  APPLY,
  AUTH,
  APPLICANTS: '/applicants',
  EMPLOYEE,
  RESUME: '/resume',
  MY_COMPANY: '/my-company',
  VISA_REGISTRATION: '/visa-registration',
  MY_ACCOUNT,
} as const;

export default ROUTE_PATH;
