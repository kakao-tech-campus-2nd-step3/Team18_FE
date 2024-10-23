export const AUTH = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  LOADING: '/loading',
} as const;

export const APPLY = {
  GUIDE: '/applyguide',
  APPLYPAGE: '/apply',
};

export const EMPLOYER = {
  MY_ACCOUNT: '/employer-my-account',
} as const;

export const EMPLOYEE = {
  VISA_REGISTRATION: '/visa-registration',
} as const;

const ROUTE_PATH = {
  HOME: '/',
  RECRUIT: '/recruit',
  POST_NOTICE: '/post-notice',
  APPLY,
  AUTH,
  APPLICANTS: '/applicants',
  EMPLOYER,
  EMPLOYEE,
  RESUME: '/resume',
} as const;

export default ROUTE_PATH;
