import Layout from '@/features/layout';
import CompanyLogo from '@/features/employer/CompanyInfo/coupang.png';
import CompanyInfo from '@/features/employer/CompanyInfo';
import styled from '@emotion/styled';
import { Flex, InnerContainer } from '@/components/common';
import MyRecruitments from '@/features/employer/MyRecruitments';

const initialCompanyData = {
  company: '쿠팡 유성점',
  industryOccupation: '온라인 소매',
  brand: '쿠팡',
  revenuePerYear: '15조',
  logo: CompanyLogo,
};

const initialRecruitmentsData = [
  {
    koreanTitle: '제목1',
    area: '대전 유성구',
    koreanDetailedDescription: '쿠팡 유성점에서 아르바이트 모집합니다.',
  },
  {
    koreanTitle: '제목2',
    area: '대전 유성구',
    koreanDetailedDescription: '쿠팡 유성점에서 아르바이트 모집합니다.',
  },
  {
    koreanTitle: '제목3',
    area: '대전 유성구',
    koreanDetailedDescription: '쿠팡 유성점에서 아르바이트 모집합니다.',
  },
];

export default function EmployerMyAccount() {
  return (
    <Layout>
      <MainContainer>
        <InnerContainer>
          <Flex direction="column" gap={{ y: '60px' }}>
            <CompanyInfo
              company={initialCompanyData.company}
              industryOccupation={initialCompanyData.industryOccupation}
              brand={initialCompanyData.brand}
              revenuePerYear={initialCompanyData.revenuePerYear}
              logo={initialCompanyData.logo}
            />
            <MyRecruitments recruitmentsList={initialRecruitmentsData} />
          </Flex>
        </InnerContainer>
      </MainContainer>
    </Layout>
  );
}

const MainContainer = styled.div`
  padding: 60px 0;
`;
