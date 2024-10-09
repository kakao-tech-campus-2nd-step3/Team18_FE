export const AUTH = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
} as const;

const ROUTE_PATH = {
  HOME: '/',
  RECRUIT: '/recruit',
  VISA_REGISTRATION: '/visa-registration',
  POST_NOTICE: '/post-notice',
  AUTH,
} as const;

export default ROUTE_PATH;
