import { palettes } from '@/assets/styles/global/palettes';
import { responsiveStyle } from '@/utils/responsive';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const recruitmentFlexStyle = css`
  ${responsiveStyle({
    default: {
      gap: '100px',
      border: `1px solid ${palettes.borderGray}`,
      borderRadius: '8px',
      padding: '15px 30px',
    },
    tablet: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 30px',
      gap: '30px',
    },
    mobile: {
      padding: '30px',
    },
  })}
`;

export const ImageWrapper = styled.div`
  width: 280px;
  height: 120px;
`;

export const imageStyle = css`
  height: 100%;

  ${responsiveStyle({
    tablet: {
      margin: '0 auto',
      width: '50%',
    },
    mobile: {
      width: '70%',
    },
  })}
`;

export const imageSize = {
  width: '277px',
  height: 'auto',
};

export const infoFlexStyle = css`
  ${responsiveStyle({
    default: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: '10px',
    },
    tablet: {
      width: '80%',
      alignItems: 'center',
    },
    mobile: {
      gap: '15px',
    },
  })}
`;

export const infoGroupStyle = css`
  ${responsiveStyle({
    default: {
      alignItems: 'center',
      gap: '30px',
    },
    tablet: {
      width: '80%',
      gap: '20px',
      justifyContent: 'center',
    },
    mobile: {
      flexDirection: 'column',
      gap: '10px',
    },
  })}
`;

export const buttonStyle = css`
  background-color: ${palettes.blue};
`;

export const buttonTextStyle = {
  fontWeight: '600',
  whiteSpace: 'nowrap',
};
