import { Flex, Typo } from '@/components/common';
import { Path, UseFormRegister, FieldErrors } from 'react-hook-form';
import styled from '@emotion/styled';
import type { ApplyInfoProps } from './useApplyHook';

type InputProps = {
  title: string;
  label: Path<ApplyInfoProps>;
  register: UseFormRegister<ApplyInfoProps>;
  required: boolean;
  errors: FieldErrors<ApplyInfoProps>;
  placeholder: string;
  pattern?: RegExp;
  patternMessage?: string;
};

const ApplyInput = ({ title, label, register, required, errors, placeholder, pattern, patternMessage }: InputProps) => (
  <Flex direction="column" gap={{ y: '10px' }}>
    <Typo size="18px" bold={true}>
      {title}
    </Typo>
    <StyledInput {...register(label, { required, pattern })} placeholder={placeholder} />
    {errors[label]?.type === 'required' && <Warring>{title}을(를) 입력해주세요!</Warring>}
    {errors[label]?.type === 'pattern' && <Warring>{patternMessage}</Warring>}
  </Flex>
);

const StyledInput = styled.input`
  width: 100%;
  height: 70px;
  font-size: 16px;
  padding: 0 20px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
`;

const Warring = styled.p`
  color: red;
`;

export default ApplyInput;
