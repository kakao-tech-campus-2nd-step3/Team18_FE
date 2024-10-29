import { Flex, InnerContainer, Spinner } from '@/components/common';
import ApplicantList from '@/features/applicants/ApplicantList/ApplicantList';
import RecruitmentsInfo from '@/features/recruitments/RecruitmentInfo/RecruitmentInfo';
import Layout from '@/features/layout';
import styled from '@emotion/styled';
import { useGetMyRecruitments } from '@/apis/recruitments/hooks/useGetMyRecruitments';
import { useParams } from 'react-router-dom';
import { useGetMyApplicants } from '@/apis/applicants/hooks/useGetMyApplicants';
import { ApplicantData, RecruitmentItem } from '@/types';
import { spinnerFlexStyle } from './Applicants.styles';

interface MyApplicantProps {
  recruitment?: RecruitmentItem;
  applicantList?: ApplicantData[];
}

export default function Applicants({ recruitment, applicantList }: MyApplicantProps) {
  const { companyId, recruitmentId } = useParams();
  const { data: recruitmentList } = useGetMyRecruitments(Number(companyId));
  const { data: applicants, isLoading } = useGetMyApplicants(Number(recruitmentId));

  const recruitmentData =
    recruitment || recruitmentList?.find((r: RecruitmentItem) => r.recruitmentId.toString() === recruitmentId);
  const applicantsData = applicantList || applicants;

  return (
    <Layout>
      <MainContainer>
        <InnerContainer>
          <Flex direction="column" gap={{ y: '60px' }} css={{ position: 'relative', minHeight: '600px' }}>
            <RecruitmentsInfo
              image={recruitmentData.image}
              companyName={recruitmentData.companyName}
              koreanTitle={recruitmentData.koreanTitle}
              area={recruitmentData.area}
              salary={recruitmentData.salary}
            />
            {isLoading ? (
              <Flex justifyContent="center" alignItems="center" css={spinnerFlexStyle}>
                <Spinner />
              </Flex>
            ) : (
              applicantsData && <ApplicantList applicantList={applicantsData} />
            )}
          </Flex>
        </InnerContainer>
      </MainContainer>
    </Layout>
  );
}

const MainContainer = styled.div`
  padding: 40px 0 80px 0;
`;
