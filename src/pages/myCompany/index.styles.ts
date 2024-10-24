import { palettes } from '@/assets/styles/global/palettes';
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

export const companyWrapperStyle = css`
  ${responsiveStyle({
    tablet: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '15px',
      width: '100%',
    },
    mobile: {
      flexDirection: 'column',
    },
  })}
`;

export const imageStyle = css`
  ${responsiveStyle({
    default: {
      width: '280px',
      height: 'auto',
    },
    tablet: {
      margin: '0 auto',
      width: '50%',
    },
    mobile: {
      width: '70%',
    },
  })}
`;

export const buttonStyle = css`
  background-color: ${palettes.blue};
  color: ${palettes.white};
  border-radius: 4px;
  white-space: nowrap;
`;
