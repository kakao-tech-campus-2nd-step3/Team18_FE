import { responsiveStyle } from '@/utils/responsive';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
  })}
`;

export const ImageWrapper = styled.div`
  width: 280px;
  height: 120px;
`;

export const imageStyle = css`
  height: 100%;
  border-radius: 6px;

  ${responsiveStyle({
    tablet: {
      margin: '0 auto',
      width: '80%',
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

export const spinnerFlexStyle = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
