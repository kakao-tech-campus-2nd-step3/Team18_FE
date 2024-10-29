import { palettes } from '@/assets/styles/global/palettes';
import { responsiveStyle } from '@/utils/responsive';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
  fontWeight: 'bold',
};

export const BreakableText = styled.span`
  ${responsiveStyle({
    default: {
      display: 'inline',
    },
    mobile: {
      display: 'block',
    },
  })}
`;
