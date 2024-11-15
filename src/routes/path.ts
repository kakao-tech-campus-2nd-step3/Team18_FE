export const AUTH = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  LOADING: '/loading',
} as const;

export const APPLY = {
  GUIDE: '/applyguide/:recruitmentId',
  APPLYPAGE: '/apply/:recruitmentId',
} as const;

export const MY_PAGE = {
  EMPLOYER: '/employer-my-page',
} as const;

export const EMPLOYEE = {
  EMPLOYEE_PAGE: '/employee-my-page',
} as const;

export const CONTRACT = {
  EMPLOYER: '/employer-contract/:applyId',
  EMPLOYEE: '/employee-contract/:applyId',
} as const;

const ROUTE_PATH = {
  PREV: -1,
  HOME: '/',
  RECRUIT: '/recruit/:recruitmentId',
  POST_NOTICE: '/post-notice/:companyId',
  APPLY,
  AUTH,
  APPLICANTS: '/applicants/:companyId/:recruitmentId',
  EMPLOYEE,
  RESUME: '/resume',
  MY_COMPANY: '/my-company/:companyId',
  REGISTER_VISA: '/register-visa',
  MY_PAGE,
  REGISTERSIGN: '/register-sign',
  REGISTERCOMPANY: '/register-company',
  CONTRACT,
} as const;

export default ROUTE_PATH;
