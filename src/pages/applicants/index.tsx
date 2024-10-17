import { Flex, InnerContainer } from '@/components/common';
import ApplicantList from '@/features/applicants/ApplicantList';
import RecruitmentsInfo from '@/features/recruitments/RecruitmentInfo';
import Layout from '@/features/layout';
import styled from '@emotion/styled';

const initialRecruitmentData = {
  companyImage: 'src/assets/images/coupang.png',
  companyName: '쿠팡 유성점',
  koreanTitle: '쿠팡 유성점에서 아르바이트 모집합니다.',
  area: '대전 유성구',
  salary: 50000000,
};

const initialApplicantListData = [
  {
    userId: 1,
    name: '이름1',
    resumeId: 1,
    applyId: 1,
    applicantNation: '베트남',
    korean: '중급',
  },
  {
    userId: 2,
    name: '이름2',
    resumeId: 2,
    applyId: 2,
    applicantNation: '베트남',
    korean: '고급',
  },
];

export default function Applicants() {
  return (
    <Layout>
      <MainContainer>
        <InnerContainer>
          <Flex direction="column" gap={{ y: '60px' }}>
            <RecruitmentsInfo
              companyImage={initialRecruitmentData.companyImage}
              companyName={initialRecruitmentData.companyName}
              koreanTitle={initialRecruitmentData.koreanTitle}
              area={initialRecruitmentData.area}
              salary={initialRecruitmentData.salary}
            />
            <ApplicantList applicantList={initialApplicantListData} />
          </Flex>
        </InnerContainer>
      </MainContainer>
    </Layout>
  );
}

const MainContainer = styled.div`
  padding: 40px 0 80px 0;
`;
