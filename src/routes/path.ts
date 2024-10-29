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
} as const;

const ROUTE_PATH = {
  HOME: '/',
  RECRUIT: '/recruit',
  POST_NOTICE: '/post-notice',
  APPLY,
  AUTH,
  APPLICANTS: '/company/:companyId/recruitment/:recruitmentId/applicants',
  EMPLOYEE,
  RESUME: '/resume',
  MY_COMPANY: '/my-company/:companyId',
  VISA_REGISTRATION: '/visa-registration',
  MY_ACCOUNT,
  REGISTERSIGN: '/registersign',
  REGISTERCOMPANY: '/register-company',
} as const;

export default ROUTE_PATH;
