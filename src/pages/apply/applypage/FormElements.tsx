import styled from '@emotion/styled';
import { Typo } from '@/components/common';

interface ApplyInputProps {
  title: string;
  type?: string;
  placeholder?: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
}
interface ApplyTextAreaProps {
  title: string;
  placeholder?: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
}

export const ApplyInput = ({ title, type, placeholder, name, onChange, value }: ApplyInputProps) => {
  return (
    <FormElWrapper>
      <label htmlFor="input">
        <Typo size="18px" bold={true}>
          {title}
        </Typo>
      </label>
      <StyledInput name={name} value={value} id="input" type={type} placeholder={placeholder} onChange={onChange} />
    </FormElWrapper>
  );
};

export const ApplyTextArea = ({ title, name, value, placeholder, onChange }: ApplyTextAreaProps) => {
  return (
    <FormElWrapper>
      <label htmlFor="input">
        <Typo size="20px" bold={true}>
          {title}
        </Typo>
      </label>
      <StyledTextArea name={name} value={value} id="input" placeholder={placeholder} onChange={onChange} />
    </FormElWrapper>
  );
};

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 170px;
  border: 1px solid #e9e9e9;
  font-size: 16px;
  resize: none;
  border-radius: 4px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 70px;
  font-size: 16px;
  padding: 0 20px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;
`;

const FormElWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: start;
  gap: 10px;
`;
