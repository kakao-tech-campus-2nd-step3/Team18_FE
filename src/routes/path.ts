export const AUTH = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
} as const;

export const APPLY = {
  GUIDE: '/applyguide',
  APPLYPAGE: '/apply',
};

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
  COMPANY_RECRUITMENTS: '/company-recruitments',
  EMPLOYEE,
} as const;

export default ROUTE_PATH;
