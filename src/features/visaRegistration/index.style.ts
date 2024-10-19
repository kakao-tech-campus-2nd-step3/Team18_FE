import { responsiveStyle } from '@/utils/responsive';
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

export const inputStyle = {
  padding: '15px 20px',
  width: '100%',
};

export const buttonStyle = {
  backgroundColor: '#0A65CC',
  color: '#fff',
  borderRadius: '4px',
};

export const ErrorMessage = styled.div`
  color: red;
  font-size: 13px;
`;
