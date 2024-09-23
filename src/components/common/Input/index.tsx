import { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import Flex from '@components/common/Flex';
import palettes from '@assets/styles/global/pallets';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...rest }: Props) {
  return (
    <Flex xGap="8px" alignItems="center">
      {label && <label>{label}</label>}
      <InputContainer {...rest} />
    </Flex>
  );
}

const InputContainer = styled.input`
  background-color: ${palettes.white};
  border: 1px solid ${palettes.borderGray};
  border-radius: 5px;
`;
