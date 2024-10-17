import { Flex, InnerContainer, Typo } from '@/components/common';
import Layout from '@/features/layout';
import CompanyList from '@/features/myAccount/employer/MyCompanies/CompanyList';
import styled from '@emotion/styled';

const initialData = [
  {
    id: 1,
    name: '쿠팡 유성점',
    industryOccupation: '온라인 소매',
    brand: '쿠팡',
    revenuePerYear: 1000000,
    logoImage: 'src/assets/images/coupang.png',
  },
  {
    id: 2,
    name: '쿠팡 유성점',
    industryOccupation: '온라인 소매',
    brand: '쿠팡',
    revenuePerYear: 1000000,
    logoImage: 'src/assets/images/coupang.png',
  },
];

export default function EmployerMyAccount() {
  return (
    <Layout>
      <MainContainer>
        <InnerContainer>
          <Flex direction="column" gap={{ y: '60px' }}>
            <Typo element="h2" size="36px" style={{ fontWeight: 'bold' }}>
              사장님, 안녕하세요!
            </Typo>
            <CompanyList companyList={initialData} />
          </Flex>
        </InnerContainer>
      </MainContainer>
    </Layout>
  );
}

const MainContainer = styled.div`
  padding: 60px 0;
`;
