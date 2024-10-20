import { responsiveStyle } from '@/utils/responsive';
import { css } from '@emotion/react';

export const buttonsCellStyle = css`
  ${responsiveStyle({
    default: {
      width: '600px',
    },
    tablet: {
      width: '280px',
    },
    mobile: {
      width: '200px',
    },
  })}
`;

export const buttonGroupStyle = css`
  ${responsiveStyle({
    tablet: {
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: '10px',
    },
  })}
`;

export const buttonStyle = css`
  ${responsiveStyle({
    default: {
      whiteSpace: 'nowrap',
    },
    mobile: {
      fontSize: '15px',
    },
  })}
`;
