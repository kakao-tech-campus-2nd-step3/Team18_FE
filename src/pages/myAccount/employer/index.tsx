import { Flex, InnerContainer, Typo } from '@/components/common';
import Layout from '@/features/layout';
import CompanyList from '@/features/companies/CompanyList';
import { companyList } from './index.mock';

export default function EmployerMyAccount() {
  return (
    <Layout>
      <div>
        <InnerContainer css={{ padding: '60px 0 80px 0' }}>
          <Flex direction="column" gap={{ y: '60px' }}>
            <Typo element="h2" size="36px" style={{ fontWeight: 'bold' }}>
              사장님, 안녕하세요!
            </Typo>
            <CompanyList companyList={companyList} />
          </Flex>
        </InnerContainer>
      </div>
    </Layout>
  );
}
