export const AUTH = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
} as const;

export const APPLY = {
  GUIDE: '/applyguide',
  APPLYPAGE: '/apply',
};

const ROUTE_PATH = {
  HOME: '/',
  RECRUIT: '/recruit',
  VISA_REGISTRATION: '/visa-registration',
  POST_NOTICE: '/post-notice',
  APPLY,
  AUTH,
} as const;

export default ROUTE_PATH;
