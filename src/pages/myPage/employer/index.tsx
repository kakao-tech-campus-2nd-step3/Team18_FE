import Layout from '@/features/layout';
import CompanyLogo from '@/features/myPage/CompanyInfo/coupang.png';
import CompanyInfo from '@/features/myPage/CompanyInfo';
import styled from '@emotion/styled';
import { InnerContainer } from '@/components/common';

const initialData = {
  logo: CompanyLogo,
  company: '쿠팡 유성점',
  industryOccupation: '온라인 소매',
  revenuePerYear: '15조',
};

export default function EmployerMyPage() {
  return (
    <Layout>
      <MainContainer>
        <InnerContainer maxWidth="1300px">
          <CompanyInfo
            logo={initialData.logo}
            company={initialData.company}
            industryOccupation={initialData.industryOccupation}
            revenuePerYear={initialData.revenuePerYear}
          />
        </InnerContainer>
      </MainContainer>
    </Layout>
  );
}

const MainContainer = styled.div`
  padding: 60px 0;
`;
