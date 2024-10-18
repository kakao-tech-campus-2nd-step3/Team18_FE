import { Flex, Typo } from '@/components/common';
import { responsiveStyle } from '@/utils/responsive';

const titleStyle = responsiveStyle({
  default: {
    marginBottom: '38px',
  },
  tablet: {
    marginBottom: '28px',
  },
  mobile: {
    marginBottom: '20px',
    fontSize: '20px',
  },
});

const descriptionTitle = responsiveStyle({
  default: {
    marginBottom: '38px',
  },
  tablet: {
    marginBottom: '28px',
  },
  mobile: {
    marginBottom: '20px',
    fontSize: '16px',
  },
});

export default function SignUpText() {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Typo element="h1" size="24px" bold style={titleStyle}>
        가입자 정보 선택
      </Typo>
      <Typo element="p" size="20px" color="gray" style={descriptionTitle}>
        대상에 해당하는 가입자 정보를 선택해주세요.
      </Typo>
    </Flex>
  );
}
