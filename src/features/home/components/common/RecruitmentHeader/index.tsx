import { Flex, Typo } from '@components/common';
import { flexStyle, divStyle, headerTypoStyle, subheaderTypoStyle } from './index.styles';

export default function RecruitmentHeader() {
  return (
    <Flex justifyContent="space-between" alignItems="center" css={flexStyle}>
      <div css={divStyle}>
        <Typo element="h1" size="38px" bold style={headerTypoStyle}>
          어떤 일자리를 구하시나요?
        </Typo>
        <Typo element="span" color="gray" size="24px" style={subheaderTypoStyle}>
          조건을 선택하고 원하는 일자리를 골라보세요.
        </Typo>
      </div>
    </Flex>
  );
}
