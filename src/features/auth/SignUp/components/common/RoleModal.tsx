import { Modal, Typo, Flex, Button } from '@components/common';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

const DEFAULT_CSS = { marginBottom: '12px', whiteSpace: 'pre-line' };
const FLEX_GAP_CONFIG = { x: '16px' };

type Props = {
  content: ReactNode;
  onSubmit: () => void;
  onClose: () => void;
};

export default function RoleModal({ content, onSubmit, onClose }: Props) {
  const { t } = useTranslation();

  return (
    <Modal
      textChildren={
        <Flex justifyContent="center" direction="column" alignItems="center">
          <Typo element="strong" size="18px" bold style={DEFAULT_CSS}>
            {t('signUpModal.common.requiredMessage')}
          </Typo>
          <Typo element="strong" size="18px" bold style={DEFAULT_CSS}>
            {content}
          </Typo>
          <Typo element="strong" size="18px">
            {t('signUpModal.common.laterMessage')}
          </Typo>
        </Flex>
      }
      buttonChildren={
        <Flex justifyContent="space-around" gap={FLEX_GAP_CONFIG}>
          <Button design="default" onClick={() => onSubmit()}>
            {t('signUpModal.buttons.submit')}
          </Button>
          <Button design="outlined" onClick={() => onClose()}>
            {t('signUpModal.buttons.cancel')}
          </Button>
        </Flex>
      }
      onClose={onClose}
    />
  );
}
