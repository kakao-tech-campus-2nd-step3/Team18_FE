export const AUTH = {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
} as const;

export const ROUTE_PATH = {
  HOME: '/',
  AUTH,
} as const;

export default ROUTE_PATH;
