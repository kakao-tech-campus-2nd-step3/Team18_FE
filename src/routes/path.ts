export const AUTH = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
} as const;

export const EMPLOYER = {
  MY_PAGE: '/employer-mypage',
} as const;

const ROUTE_PATH = {
  HOME: '/',
  Recruit: '/recruit',
  VISA_REGISTRATION: '/visa-registration',
  POST_NOTICE: '/post-notice',
  AUTH,
  EMPLOYER,
} as const;

export default ROUTE_PATH;
