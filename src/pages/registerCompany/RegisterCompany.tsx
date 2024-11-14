import { Flex } from '@/components/common';
import Title from '@/components/common/Title';
import Layout from '@/features/layout';
import CompanyRegistrationForm from '@/features/registerCompany/components/CompanyRegistrationForm';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

export default function RegisterCompany() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Flex justifyContent="center">
        <LineWrapper style={{ backgroundColor: 'white' }}>
          <Flex direction="column" justifyContent="space-between" alignItems="center" style={{ width: '700px' }}>
            <Title text={t('registerCompany.TITLE')} />
            <CompanyRegistrationForm />
          </Flex>
        </LineWrapper>
      </Flex>
    </Layout>
  );
}
const LineWrapper = styled.div`
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  padding: 100px 100px;
  margin: 52px 0;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;
