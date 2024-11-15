import { responsiveStyle } from '@/utils/responsive';
import { css } from '@emotion/react';

export const cellStyle = css`
  ${responsiveStyle({
    tablet: {
      flexDirection: 'column',
    },
  })}
`;

export const imageSize = {
  width: '277px',
  height: '110px',
};

export const imageStyle = css`
  border-radius: 6px;

  ${responsiveStyle({
    tablet: {
      margin: '0 auto',
      width: '50%',
    },
  })}
`;
