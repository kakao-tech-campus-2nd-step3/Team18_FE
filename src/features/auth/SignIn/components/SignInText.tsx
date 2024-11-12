import { Flex, Typo } from '@components/common';
import { responsiveStyle } from '@utils/responsive';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <Flex direction="column" css={flexStyle}>
      <Typo element="h1" size="58px" bold style={headingTypoStyle}>
        {t('signIn.heading')}
      </Typo>
      <Typo element="p" size="18px" color="gray" style={paragraphTypoStyle}>
        {t('signIn.description')}
      </Typo>
    </Flex>
  );
}
