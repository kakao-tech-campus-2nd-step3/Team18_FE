import { Flex, InnerContainer, Typo } from '@/components/common';
import Layout from '@/features/layout';
import CompanyList from '@/features/companies/CompanyList';
import { companyList } from './index.mock';
import { innerContainerStyle, typoStyle } from './index.styles';

export default function EmployerMyAccount() {
  return (
    <Layout>
      <div>
        <InnerContainer css={innerContainerStyle}>
          <Flex direction="column" gap={{ y: '60px' }}>
            <Typo element="h2" size="36px" style={typoStyle}>
              사장님, 안녕하세요!
            </Typo>
            <CompanyList companyList={companyList} />
          </Flex>
        </InnerContainer>
      </div>
    </Layout>
  );
}
