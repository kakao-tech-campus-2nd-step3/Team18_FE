import styled from '@emotion/styled';
import { ReactNode } from 'react';

export type Props = {
  textChildren: ReactNode;
  buttonChildren: ReactNode;
  borderRadius?: string;
  onClose: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const Modal = ({ textChildren, buttonChildren, borderRadius = '12px', onClose, ...props }: Props) => {
  return (
    <Overlay onClick={onClose}>
      <Card borderRadius={borderRadius} {...props} onClick={(e) => e.stopPropagation()}>
        <Wrapper>
          <TextWrapper>{textChildren}</TextWrapper>
          <ButtonWrapper>{buttonChildren}</ButtonWrapper>
        </Wrapper>
      </Card>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Card = styled.div<{ borderRadius: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: ${({ borderRadius }) => borderRadius};
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

const TextWrapper = styled.div`
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
