export const breakpoints = {
  tablet: '768px',
  mobile: '480px',
} as const;

export const mediaQueries = {
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  mobile: `@media (max-width: ${breakpoints.mobile})`,
};
