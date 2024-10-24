export const AUTH = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
} as const;

export const APPLY = {
  GUIDE: '/applyguide',
  APPLYPAGE: '/apply',
};

export const EMPLOYER = {
  MY_ACCOUNT: '/employer-my-account',
} as const;

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
  EMPLOYER,
  EMPLOYEE,
} as const;

export default ROUTE_PATH;
