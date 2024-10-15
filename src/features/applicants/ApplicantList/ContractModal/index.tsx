import { Button, Flex, Icon, Modal, Typo } from '@/components/common';
import ModalText from './ModalText';
import { css } from '@emotion/react';
import { palettes } from '@/assets/styles/global/palettes';

const initialData = {
  foreignerIdNumber: '123456-1234567',
  visaGenerateDate: '2000-00-00',
  visaExpiryDate: '2000-00-00',
};

interface ContractModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContractModal({ isOpen, onClose }: ContractModalProps) {
  return (
    <>
      {isOpen && (
        <Modal
          textChildren={
            <ModalText
              foreignerIdNumber={initialData.foreignerIdNumber}
              visaGenerateDate={initialData.visaGenerateDate}
            />
          }
          buttonChildren={
            <Flex justifyContent="space-between">
              <Button onClick={onClose}>취소</Button>
              <Button onClick={onClose} css={customButtonStyle}>
                <Flex gap={{ x: '15px' }}>
                  <Typo size="16px" style={{ color: `${palettes.white}` }}>
                    확인하였습니다.
                  </Typo>
                  <Icon.Arrow.RightWhite />
                </Flex>
              </Button>
            </Flex>
          }
          onClose={onClose}
          style={{ padding: '15px' }}
        />
      )}
    </>
  );
}

const customButtonStyle = css`
  background-color: ${palettes.blue};
  color: ${palettes.white};
`;
