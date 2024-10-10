import { Typo, Icon, Flex } from '@components/common';

export default function Detail() {
  return (
    <Flex alignItems="center" gap={{ x: '8px' }} css={{ cursor: 'pointer' }}>
      <Typo element="span" size="16px" color="blue">
        Read More
      </Typo>
      <Icon.Arrow.Right />
    </Flex>
  );
}
