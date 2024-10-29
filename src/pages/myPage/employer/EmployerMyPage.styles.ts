import { responsiveStyle } from '@/utils/responsive';
import { css } from '@emotion/react';

export const innerContainerStyle = css`
  ${responsiveStyle({
    default: {
      padding: '60px 0 80px 0',
    },
    tablet: {
      padding: '60px 0 80px 0',
    },
    mobile: {
      padding: '40px 0 80px 0',
    },
  })}
`;

export const typoStyle = {
  ...responsiveStyle({
    default: {
      fontWeight: 'bold',
    },
    tablet: {
      fontSize: '33px',
    },
    mobile: {
      fontSize: '30px',
    },
  }),
};
