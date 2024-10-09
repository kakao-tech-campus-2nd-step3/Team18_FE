export const AUTH = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
} as const;

export const EMPLOYER = {
  MY_ACCOUNT: '/employer-my-account',
} as const;

export const EMPLOYEE = {
  VISA_REGISTRATION: '/visa-registration',
} as const;

const ROUTE_PATH = {
  HOME: '/',
  Recruit: '/recruit',
  POST_NOTICE: '/post-notice',
  AUTH,
  EMPLOYER,
  EMPLOYEE,
} as const;

export default ROUTE_PATH;
