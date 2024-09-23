import { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import palettes from '@assets/styles/global/pallets';

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
  background-color: ${palettes.white};
  border: 1px solid ${palettes.borderGray};
  border-radius: 5px;
`;
