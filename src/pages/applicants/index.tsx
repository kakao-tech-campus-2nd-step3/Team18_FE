import { Flex, InnerContainer } from '@/components/common';
import ApplicantList from '@/features/applicants/ApplicantList';
import RecruitmentsInfo from '@/features/recruitments/RecruitmentInfo';
import Layout from '@/features/layout';
import styled from '@emotion/styled';
import { applicantList, recruitment } from './index.mock';

export default function Applicants() {
  return (
    <Layout>
      <MainContainer>
        <InnerContainer>
          <Flex direction="column" gap={{ y: '60px' }}>
            <RecruitmentsInfo
              image={recruitment.image}
              companyName={recruitment.companyName}
              koreanTitle={recruitment.koreanTitle}
              area={recruitment.area}
              salary={recruitment.salary}
            />
            <ApplicantList applicantList={applicantList} />
          </Flex>
        </InnerContainer>
      </MainContainer>
    </Layout>
  );
}

const MainContainer = styled.div`
  padding: 40px 0 80px 0;
`;
