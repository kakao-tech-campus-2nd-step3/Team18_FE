import { Flex } from '@components/common';
import RoleSelector from './components/RoleSelector';
import { ReactNode } from 'react';

type Props = {
  onRoleSelect: (modalContent: ReactNode) => void;
};

export default function RoleSelection({ onRoleSelect }: Props) {
  return (
    <Flex justifyContent="center" alignItems="center" gap={{ x: '30px' }}>
      <RoleSelector role="employer" onClick={onRoleSelect} />
      <RoleSelector role="worker" onClick={onRoleSelect} />
    </Flex>
  );
}
