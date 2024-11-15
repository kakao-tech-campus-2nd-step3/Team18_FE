import { Flex, Typo } from '@components/common';
import { useRecruitmentCardContext } from '../index.context';

const DEFAULT_MARGIN = { marginRight: '4px' };

export default function Detail() {
  const { recruitment } = useRecruitmentCardContext();

  return (
    <div css={DEFAULT_MARGIN}>
      <Flex>
        <Typo element="strong" size="16px" color="gray" bold style={DEFAULT_MARGIN}>
          근무지역:
        </Typo>
        <Typo element="p" size="16px" color="gray">
          {recruitment.area}
        </Typo>
      </Flex>
      <Flex>
        <Typo element="strong" size="16px" color="gray" bold style={DEFAULT_MARGIN}>
          근무시간:
        </Typo>
        <Typo element="p" size="16px" color="gray">
          {recruitment.workHours}
        </Typo>
      </Flex>
    </div>
  );
}
