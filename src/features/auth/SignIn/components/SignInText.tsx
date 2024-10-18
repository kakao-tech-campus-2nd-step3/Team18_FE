import { Flex, Typo } from '@components/common';
import { responsiveStyle } from '@utils/responsive';

const flexStyle = responsiveStyle({
  default: {
    marginBottom: '72px',
  },
  tablet: {
    marginBottom: '56px',
  },
  mobile: {
    marginBottom: '42px',
    alignItems: 'center',
  },
});

const headingTypoStyle = responsiveStyle({
  default: {
    marginBottom: '24px',
  },
  tablet: { fontSize: '32px' },
  mobile: { fontSize: '28px' },
});

const paragraphTypoStyle = responsiveStyle({
  tablet: { fontSize: '16px' },
  mobile: { fontSize: '14px' },
});

export function SignInText() {
  return (
    <Flex direction="column" css={flexStyle}>
      <Typo element="h1" size="58px" bold style={headingTypoStyle}>
        지금 바로 시작하세요. 🚀
      </Typo>
      <Typo element="p" size="18px" color="gray" style={paragraphTypoStyle}>
        안정적이고 투명한 고용 관계의 시작, 지금 바로 경험해보세요!
      </Typo>
    </Flex>
  );
}
