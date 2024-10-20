import { responsiveStyle } from '@/utils/responsive';
import styled from '@emotion/styled';

export const MainContainer = styled.div`
  padding: 40px 0;
`;

export const innerContainerStyle = {
  height: '520px',
  padding: '50px 0',
  border: '1px solid #E9E9E9',
  borderRadius: '12px',
};

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

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
