import { Button, Flex, Icon, Typo } from '@/components/common';
import { buttonTextStyle, customButtonStyle } from './ModalButtons.styles';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';
import { useTranslation } from 'react-i18next';

interface ModalButtonsProps {
  applyId: number;
  onClose: () => void;
}

export default function ModalButtons({ applyId, onClose }: ModalButtonsProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToEmployer = () => {
    navigate(ROUTE_PATH.CONTRACT.EMPLOYER.replace(':applyId', applyId.toString()));
  };

  return (
    <Flex justifyContent="space-between">
      <Button onClick={onClose}>{t('contractModal.buttons.cancel')}</Button>
      <Button onClick={goToEmployer} css={customButtonStyle}>
        <Flex gap={{ x: '15px' }}>
          <Typo size="16px" style={buttonTextStyle}>
            {t('contractModal.buttons.confirm')}
          </Typo>
          <Icon.Arrow.RightWhite />
        </Flex>
      </Button>
    </Flex>
  );
}
