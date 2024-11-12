import { Flex, Typo } from '@/components/common';
import { responsiveStyle } from '@/utils/responsive';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Typo element="h1" size="24px" bold style={titleStyle}>
        {t('signUp.heading')}
      </Typo>
      <Typo element="p" size="20px" color="gray" style={descriptionTitle}>
        {t('signUp.description')}
      </Typo>
    </Flex>
  );
}
