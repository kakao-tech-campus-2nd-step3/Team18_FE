import { Card, Flex, Typo } from '@components/common';
import { roleConfig } from './index.config';
import { bounceAnimation } from '@assets/styles/animations';
import { ReactNode } from 'react';
import { responsiveStyle } from '@utils/responsive';

type Props = {
  role: 'employer' | 'worker';
  onClick: (modalContent: ReactNode) => void;
};

export default function RoleSelector({ role, onClick }: Props) {
  return (
    <Card
      borderColor="blue"
      borderRadius="12px"
      css={[
        bounceAnimation,
        responsiveStyle({
          default: { padding: '60px 120px', cursor: 'pointer' },
          mobile: { padding: '16px 32px' },
        }),
      ]}
      onClick={() => onClick(roleConfig[role].modalContent)}
    >
      <Flex direction="column" alignItems="center">
        <div
          css={responsiveStyle({
            default: { marginBottom: '24px' },
            mobile: {
              marginBottom: '10px',
            },
          })}
        >
          {roleConfig[role].icon}
        </div>

        <Typo element="h2" color="blue" size="18px" bold>
          {roleConfig[role].text}
        </Typo>
      </Flex>
    </Card>
  );
}
