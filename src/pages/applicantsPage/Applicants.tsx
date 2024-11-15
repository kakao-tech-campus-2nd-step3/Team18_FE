import { Flex, InnerContainer } from '@/components/common';
import ApplicantList from '@/pages/applicantsPage/ApplicantList';
import RecruitmentsInfo from '@/pages/myCompanyPage/Recruitments/RecruitmentInfo';
import Layout from '@/features/layout';
import styled from '@emotion/styled';
import { ApplicantData, RecruitmentItem } from '@/types';

interface ApplicantsProps {
  recruitmentData: RecruitmentItem | null;
  applicantsData: ApplicantData[] | null;
}

export default function Applicants({ recruitmentData, applicantsData }: ApplicantsProps) {
  return (
    <Layout>
      <MainContainer>
        <InnerContainer>
          <Flex direction="column" gap={{ y: '60px' }} css={{ position: 'relative', minHeight: '600px' }}>
            {recruitmentData && (
              <RecruitmentsInfo
                recruitmentId={recruitmentData.recruitmentId}
                imageUrl={recruitmentData.imageUrl}
                companyName={recruitmentData.companyName}
                koreanTitle={recruitmentData.koreanTitle}
                vietnameseTitle={recruitmentData.vietnameseTitle}
                area={recruitmentData.area}
                salary={recruitmentData.salary}
              />
            )}
            {applicantsData && <ApplicantList applicantList={applicantsData} />}
          </Flex>
        </InnerContainer>
      </MainContainer>
    </Layout>
  );
}

const MainContainer = styled.div`
  padding: 40px 0 80px 0;
`;
