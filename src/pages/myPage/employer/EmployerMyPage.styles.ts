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

export const flexStyle = css`
  background-color: ${palettes.blue};
  padding: 30px;
  border-radius: 8px;

  ${responsiveStyle({
    mobile: {
      flexDirection: 'column',
      gap: '27px',
      justifyContent: 'center',
    },
  })}
`;

export const typoStyle = {
  ...responsiveStyle({
    default: {
      color: `${palettes.white}`,
    },
    tablet: {
      fontSize: '33px',
    },
    mobile: {
      fontSize: '30px',
    },
  }),
};

export const buttonGroupStyle = css`
  ${responsiveStyle({
    default: {
      maxWidth: '650px',
    },
    tablet: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '15px',
      maxWidth: '320px',
    },
    mobile: {
      alignItems: 'center',
      gap: '10px',
    },
  })}
`;

export const buttonStyle = css`
  width: 300px;
  padding: 25px;
  border-radius: 8px;
`;

export const spinnerFlexStyle = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
