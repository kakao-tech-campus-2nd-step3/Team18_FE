import { Modal, Typo, Flex, Button } from '@components/common';
import { ReactNode } from 'react';

type Props = {
  content: ReactNode;
  onClose: () => void;
};

export default function RoleModal({ content, onClose }: Props) {
  return (
    <Modal
      textChildren={
        <div css={{ textAlign: 'center' }}>
          <Typo element="strong" size="18px" bold>
            정보를 입력해주세요. <br />
            <br />
            {content}
            <br />
            <br />
            <span css={{ fontWeight: '400' }}>* 추후 마이페이지에서 수정 할 수 있습니다.</span>
          </Typo>
          <br />
        </div>
      }
      buttonChildren={
        <Flex gap={{ x: '16px' }}>
          <Button theme="default">등록할게요</Button>
          <Button theme="outlined">괜찮아요</Button>
        </Flex>
      }
      onClose={onClose}
    />
  );
}
