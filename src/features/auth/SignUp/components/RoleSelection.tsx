import { Flex } from '@components/common';
import RoleSelector from './common/RoleSelector';

const FLEX_GAP_CONFIG = { x: '30px' };

export default function RoleSelection() {
  return (
    <Flex justifyContent="center" alignItems="center" gap={FLEX_GAP_CONFIG}>
      <RoleSelector role="employer" />
      <RoleSelector role="worker" />
    </Flex>
  );
}
