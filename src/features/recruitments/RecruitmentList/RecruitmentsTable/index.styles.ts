import { palettes } from '@/assets/styles/global/palettes';
import { responsiveStyle } from '@/utils/responsive';
import { css } from '@emotion/react';

export const recruitmentTitleStyle = {
  color: `${palettes.blue}`,
};

export const recruitmentStyle = css`
  ${responsiveStyle({
    default: {
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0',
    },
    tablet: {
      flexDirection: 'column',
      gap: '15px',
      padding: '15px 0',
    },
    mobile: {
      padding: '10px 0',
    },
  })}
`;

export const buttonGroupStyle = css`
  ${responsiveStyle({
    default: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: '15px',
    },
    tablet: {
      justifyContent: 'flex-start',
    },
    mobile: {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  })}
`;

export const buttonStyle = css`
  background-color: ${palettes.backgroundGray};
  white-space: nowrap;
`;
