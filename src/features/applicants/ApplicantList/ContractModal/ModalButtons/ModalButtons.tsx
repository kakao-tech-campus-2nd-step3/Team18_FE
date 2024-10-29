import { Button, Flex, Icon, Typo } from '@/components/common';
import { buttonTextStyle, customButtonStyle } from './ModalButtons.styles';

interface ModalButtonsProps {
  onClose: () => void;
}

export default function ModalButtons({ onClose }: ModalButtonsProps) {
  return (
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
  );
}
