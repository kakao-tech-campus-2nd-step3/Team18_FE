import { palettes } from '@/assets/styles/global/palettes';
import { responsiveStyle } from '@/utils/responsive';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  ${responsiveStyle({
    tablet: {
      gap: '20px',
      padding: '0 20px',
    },
    mobile: {
      padding: '0 15px',
    },
  })}
`;

export const inputStyle = css`
  padding: 15px 20px;
  width: 100%;
`;

export const buttonStyle = css`
  background-color: ${palettes.blue};
  color: ${palettes.white};
  border-radius: 4px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 13px;
`;
