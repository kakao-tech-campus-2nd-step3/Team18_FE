import { Flex } from '@/components/common';
import styled from '@emotion/styled';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { type ResumeInfo } from './ResumeType';
import { useTranslation } from 'react-i18next';

interface InputType {
  id: keyof ResumeInfo;
  label?: string;
  register: UseFormRegister<ResumeInfo>;
  errors: FieldErrors;
  pattern?: RegExp;
  patternMessage?: string;
  placeholder: string;
}

export function SelectKoreanLevel({ level, register }: { level: string; register: UseFormRegister<ResumeInfo> }) {
  return (
    <Flex alignItems="center">
      <RadioButton id={level} type="radio" {...register('koreanLanguageLevel', { required: true })} value={level} />
      <label htmlFor={level}>{level}</label>
    </Flex>
  );
}

export function InputResumeInfo({ id, label, register, pattern, errors, patternMessage, placeholder }: InputType) {
  const { t } = useTranslation();
  return (
    <Flex direction="column" gap={{ y: '20px' }}>
      <Flex gap={{ x: '10px' }} alignItems="center" justifyContent="space-between">
        <label css={{ fontSize: '18px', fontWeight: 'bold' }} htmlFor={id}>
          {label}
        </label>
        <CustomInput id={id} {...register(id, { required: true, pattern })} placeholder={placeholder} />
      </Flex>
      {errors[id]?.type === 'required' && (
        <Warring>
          {label}
          {t('resume.errors')}
        </Warring>
      )}
      {errors[id]?.type === 'pattern' && <Warring>{patternMessage}</Warring>}
    </Flex>
  );
}

export function TextareaResumeInfo({ id, register, errors, placeholder }: InputType) {
  const { t } = useTranslation();

  return (
    <Flex direction="column" gap={{ y: '20px' }}>
      <Flex direction="column" css={{ width: '100%' }} gap={{ y: '20px' }}>
        <label htmlFor={id} css={{ fontSize: '18px', fontWeight: 'bold' }}>
          {t('resume.introduction')}
        </label>
        <CustomTextarea id={id} {...register('introduction', { required: true })} placeholder={placeholder} />
      </Flex>
      {errors[id]?.type === 'required' && <Warring> {t('resume.ResumeDescription.introduction')}</Warring>}
    </Flex>
  );
}

const RadioButton = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: white;
    top: 1px;
    left: 1px;
    border-radius: 3px;
    border: 1px solid #e4e5e8;
  }

  &:checked:before {
    background-color: #0a65cc;
    border: none;
  }

  &:checked:after {
    content: '✔';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-55%, -55%);
    font-size: 14px;
    color: #fff;
  }
`;
const CustomInput = styled.input`
  display: flex;
  flex: 1;
  margin: 0 10px;
  border-radius: 5px;
  padding: 14px;
  font-size: 16px;
  border: 1px solid #e4e5e8;
`;

const CustomTextarea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  fontsize: 16px;
  height: 100px;
  resize: none;
  border: 1px solid #e4e5e8;
`;

const Warring = styled.p`
  color: red;
`;
