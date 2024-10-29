import { Button, Flex, Icon, Modal, Typo } from '@/components/common';
import ModalText from './ModalText';
import { buttonTextStyle, customButtonStyle, modalStyle } from './index.styles';
import { useGetForeigner } from '@/apis/applicants/hooks/useGetForeigner';

interface ContractModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: number;
}

export default function ContractModal({ isOpen, onClose, userId }: ContractModalProps) {
  const { data: foreigner } = useGetForeigner(userId);

  return (
    <>
      {isOpen && foreigner && (
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
          onClose={onClose}
          style={modalStyle}
        />
      )}
    </>
  );
}
