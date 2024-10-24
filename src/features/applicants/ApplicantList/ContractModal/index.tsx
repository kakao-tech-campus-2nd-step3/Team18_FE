import { Button, Flex, Icon, Modal, Typo } from '@/components/common';
import ModalText from './ModalText';
import { foreigner } from './index.mock';
import { buttonTextStyle, customButtonStyle, modalStyle } from './index.styles';

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
            <ModalText foreignerIdNumber={foreigner.foreignerIdNumber} visaGenerateDate={foreigner.visaGenerateDate} />
          }
          buttonChildren={
            <Flex justifyContent="space-between">
              <Button onClick={onClose}>취소</Button>
              <Button onClick={onClose} css={customButtonStyle}>
                <Flex gap={{ x: '15px' }}>
                  <Typo size="16px" style={buttonTextStyle}>
                    확인하였습니다.
                  </Typo>
                  <Icon.Arrow.RightWhite />
                </Flex>
              </Button>
            </Flex>
          }
          /* onClose 부분 추후 수정 예정 */
          onClose={onClose}
          style={modalStyle}
        />
      )}
    </>
  );
}
