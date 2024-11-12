import { Flex, InnerContainer, Typo } from '@/components/common';
import Layout from '@/features/layout';
import VisaRegistrationForm from '@/features/registerVisa/VisaRegistrationForm';
import { innerContainerStyle, titleStyle } from './RegisterVisa.styles';
import { useTranslation } from 'react-i18next';

export default function RegisterVisa() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div>
        <InnerContainer css={innerContainerStyle}>
          <Flex
            justifyContent="center"
            alignItems="center"
            direction="column"
            gap={{ y: '60px' }}
            css={{ height: '100%' }}
          >
            <Typo element="h2" size="24px" style={titleStyle}>
              {t('registerVisa.title')}
            </Typo>
            <VisaRegistrationForm />
          </Flex>
        </InnerContainer>
      </div>
    </Layout>
  );
}
