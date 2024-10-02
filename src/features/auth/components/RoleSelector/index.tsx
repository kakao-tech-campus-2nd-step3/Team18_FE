import { Card, Flex, Typo } from '@components/common';
import { roleConfig } from './index.config';
import { bounceAnimation } from '@assets/styles/animations';
import { ReactNode } from 'react';

type Props = {
  role: 'employer' | 'worker';
  onClick: (modalContent: ReactNode) => void;
};

export default function RoleSelector({ role, onClick }: Props) {
  return (
    <Card
      borderColor="blue"
      borderRadius="12px"
      css={[bounceAnimation, { padding: '60px 120px', cursor: 'pointer' }]}
      onClick={() => onClick(roleConfig[role].modalContent)}
    >
      <Flex direction="column" alignItems="center">
        <div css={{ marginBottom: '24px' }}>{roleConfig[role].icon}</div>
        <Typo element="h2" color="blue" size="18px" bold>
          {roleConfig[role].text}
        </Typo>
      </Flex>
    </Card>
  );
}
