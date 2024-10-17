import { responsiveStyle } from '@/utils/responsive';
import { css } from '@emotion/react';

export const infoWrapperStyle = css`
  ${responsiveStyle({
    default: {
      maxWidth: '60%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '15px',
    },
    tablet: {
      alignItems: 'center',
      margin: '10px 0 20px 0',
      width: '70%',
    },
  })}
`;

export const infoStyle = css`
  ${responsiveStyle({
    default: {
      alignItems: 'center',
      gap: '30px',
    },
    tablet: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '80%',
      gap: '20px',
    },
    mobile: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
    },
  })}
`;
