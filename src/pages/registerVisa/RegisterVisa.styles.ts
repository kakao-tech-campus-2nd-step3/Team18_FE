import { palettes } from '@/assets/styles/global/palettes';
import { responsiveStyle } from '@/utils/responsive';
import { css } from '@emotion/react';

export const innerContainerStyle = css`
  ${responsiveStyle({
    default: {
      border: `1px solid ${palettes.borderGray}`,
      padding: '80px 0',
      borderRadius: '12px',
      marginTop: '60px',
      marginBottom: '80px',
    },
    tablet: {
      padding: '80px 0',
    },
    mobile: {
      padding: '60px 0',
    },
  })}
`;

export const titleStyle = {
  ...responsiveStyle({
    default: {
      fontWeight: 'bold',
    },
    mobile: {
      padding: '0 50px',
    },
  }),
};
