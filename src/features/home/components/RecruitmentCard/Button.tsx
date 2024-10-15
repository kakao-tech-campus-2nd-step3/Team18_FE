import { Typo, Icon, Flex } from '@components/common';

const FLEX_GAP_CONFIG = { x: '8px' };
const BUTTON_CONTAINER_STYLE = { cursor: 'pointer' };

export default function Button() {
  return (
    <Flex alignItems="center" gap={FLEX_GAP_CONFIG} css={BUTTON_CONTAINER_STYLE}>
      <Typo element="span" size="16px" color="blue">
        Read More
      </Typo>
      <div>
        <Icon.Arrow.RightBlue />
      </div>
    </Flex>
  );
}
