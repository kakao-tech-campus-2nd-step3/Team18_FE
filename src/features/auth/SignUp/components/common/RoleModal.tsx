import { Modal, Typo, Flex, Button } from '@components/common';
import { ReactNode } from 'react';

const DEFAULT_CSS = { marginBottom: '12px' };
const FLEX_GAP_CONFIG = { x: '16px' };

type Props = {
  content: ReactNode;
  onSubmit: () => void;
  onClose: () => void;
};

export default function RoleModal({ content, onSubmit, onClose }: Props) {
  return (
    <Modal
      textChildren={
        <Flex direction="column" alignItems="center">
          <Typo element="strong" size="18px" bold style={DEFAULT_CSS}>
            정보를 입력해주세요.
          </Typo>
          <Typo element="strong" size="18px" bold style={DEFAULT_CSS}>
            {content}
          </Typo>
          <Typo element="strong" size="18px">
            * 추후 마이페이지에서 수정 할 수 있습니다.
          </Typo>
        </Flex>
      }
      buttonChildren={
        <Flex gap={FLEX_GAP_CONFIG}>
          <Button design="default" onClick={() => onSubmit()}>
            등록할게요
          </Button>
          <Button design="outlined" onClick={() => onClose()}>
            괜찮아요
          </Button>
        </Flex>
      }
      onClose={onClose}
    />
  );
}
