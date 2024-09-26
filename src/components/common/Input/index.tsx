import { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...rest }: Props) {
  return (
    <>
      {label && <label>{label}</label>}
      <InputContainer {...rest} />
    </>
  );
}

const InputContainer = styled.input`
  background-color: ${({ theme }) => theme.palettes.white};
  border: 1px solid ${({ theme }) => theme.palettes.borderGray};
  border-radius: 5px;
`;
