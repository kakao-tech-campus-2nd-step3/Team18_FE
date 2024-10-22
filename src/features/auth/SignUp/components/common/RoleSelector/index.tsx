import { Card, Flex, Typo } from '@components/common';
import { roleConfig } from './index.config';
import { bounceAnimation } from '@assets/styles/animations';
import { responsiveStyle } from '@utils/responsive';
import useModals from '@components/common/Modal/hooks/useModals';
import { modals } from '@/components/common/Modal/Modals';

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
  role: 'employer' | 'worker';
};

export default function RoleSelector({ role }: Props) {
  const { openModal } = useModals();

  const handleClick = () => {
    openModal(modals.roleModal, {
      content: roleConfig[role].modalContent,
      onSubmit: () => console.log('이력서 등록 페이지로 이동'),
    });
  };

  return (
    <Card borderColor="blue" borderRadius="12px" css={[bounceAnimation, cardStyle]} onClick={handleClick}>
      <Flex direction="column" alignItems="center">
        <div css={iconStyle}>{roleConfig[role].icon}</div>
        <Typo element="h2" color="blue" size="18px" bold>
          {roleConfig[role].text}
        </Typo>
      </Flex>
    </Card>
  );
}
