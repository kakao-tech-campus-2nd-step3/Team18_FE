import { Card, Flex, Typo } from '@components/common';
import { roleConfig } from './index.config';
import { bounceAnimation } from '@assets/styles/animations';
import { responsiveStyle } from '@utils/responsive';
import useModals from '@components/common/Modal/hooks/useModals';
import { modals } from '@/components/common/Modal/Modals';
import { useRegister } from '@/apis/auth/mutations/useRegister';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';

const cardStyle = responsiveStyle({
  default: { padding: '60px 120px', cursor: 'pointer' },
  mobile: { padding: '16px 32px' },
});

const iconStyle = responsiveStyle({
  default: { marginBottom: '24px' },
  mobile: {
    marginBottom: '10px',
  },
});

type Props = {
  role: 'employer' | 'employee';
};

export default function RoleSelector({ role }: Props) {
  const navigate = useNavigate();
  const { openModal } = useModals();
  const { mutate } = useRegister();

  const handleRegister = () => {
    mutate(
      { type: role },
      {
        onSuccess: () => {
          handleOpenModal();
        },
      },
    );
  };

  const handleOpenModal = () =>
    openModal(modals.roleModal, {
      content: roleConfig[role].modalContent,
      onSubmit: () => navigate(roleConfig[role].toNavigate),
      onClose: () => navigate(ROUTE_PATH.HOME),
    });

  return (
    <Card borderColor="blue" borderRadius="12px" css={[bounceAnimation, cardStyle]} onClick={handleRegister}>
      <Flex direction="column" alignItems="center">
        <div css={iconStyle}>{roleConfig[role].icon}</div>
        <Typo element="h2" color="blue" size="18px" bold>
          {roleConfig[role].text}
        </Typo>
      </Flex>
    </Card>
  );
}
