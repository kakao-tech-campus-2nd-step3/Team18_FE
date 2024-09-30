import styled from '@emotion/styled';
import { ReactNode } from 'react';

export type Props = {
  textChildren: ReactNode;
  buttonChildren: ReactNode;
  borderRadius?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Modal = ({ textChildren, buttonChildren, borderRadius = '12px', ...props }: Props) => {
  return (
    <Card borderRadius={borderRadius} {...props}>
      <Wrapper>
        <TextWrapper>{textChildren}</TextWrapper>
        <ButtonWrapper>{buttonChildren}</ButtonWrapper>
      </Wrapper>
    </Card>
  );
};

const Card = styled.div<{ borderRadius: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.p`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Modal;
