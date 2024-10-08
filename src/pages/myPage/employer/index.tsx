import Layout from '@/features/layout';
import CompanyLogo from '@/features/myPage/CompanyInfo/coupang.png';
import CompanyInfo from '@/features/myPage/CompanyInfo';
import styled from '@emotion/styled';
import { Flex, InnerContainer } from '@/components/common';
import MyRecruitments from '@/features/myPage/MyRecruitments';

const initialCompanyData = {
  logo: CompanyLogo,
  company: '쿠팡 유성점',
  industryOccupation: '온라인 소매',
  revenuePerYear: '15조',
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

export default function EmployerMyPage() {
  return (
    <Layout>
      <MainContainer>
        <InnerContainer maxWidth="1300px">
          <Flex direction="column" gap={{ y: '60px' }}>
            <CompanyInfo
              logo={initialCompanyData.logo}
              company={initialCompanyData.company}
              industryOccupation={initialCompanyData.industryOccupation}
              revenuePerYear={initialCompanyData.revenuePerYear}
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