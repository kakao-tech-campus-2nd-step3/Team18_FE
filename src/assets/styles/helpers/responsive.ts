import theme from '../theme';

export const responsiveSectionPadding = {
  default: {
    padding: '100px 0',
  },
  tablet: {
    padding: '80px 0',
  },
  mobile: {
    padding: '60px 0',
  },
};

export const responsiveStyle = (styles: {
  default?: { [key: string]: string };
  tablet?: { [key: string]: string };
  mobile?: { [key: string]: string };
}) => ({
  ...styles.default,
  [theme.mediaQueries.tablet]: {
    ...styles.tablet,
  },
  [theme.mediaQueries.mobile]: {
    ...styles.mobile,
  },
});
