import { responsiveStyle } from '@utils/responsive';

export const flexStyle = responsiveStyle({
  default: {
    marginBottom: '60px',
  },
  mobile: {
    marginBottom: '32px',
    justifyContent: 'center',
  },
});

export const divStyle = responsiveStyle({
  mobile: {
    textAlign: 'center',
  },
});

export const headerTypoStyle = responsiveStyle({
  default: {
    marginBottom: '16px',
  },
  mobile: {
    marginBottom: '12px',
    fontSize: '28px',
  },
});

export const subheaderTypoStyle = responsiveStyle({
  mobile: {
    fontSize: '18px',
  },
});
