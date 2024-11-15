import styled from '@emotion/styled';
import RecruitCard from './RecruitCard';
import RecruitDetail from './RecruitDetail';
import Layout from '@/features/layout';
import { useParams } from 'react-router-dom';
import { Spinner } from '@/components/common';
import { useGetRecruitmentsDetail } from '@/apis/recruitmentsDetail/useRecruitmentsDetail';
import { useGetRequiredFieldCheck } from '@/apis/recruitmentsDetail/useRequiredFieldCheck';

export default function Recruit() {
  const { recruitmentId = '1' } = useParams();

  const { data, isLoading } = useGetRecruitmentsDetail(Number(recruitmentId));
  const { data: requiredFieldCheck } = useGetRequiredFieldCheck();
  if (isLoading || !data) {
    return <Spinner />;
  }
  return (
    <Layout>
      <Container>
        <RecruitCard {...data} requiredFieldCheck={requiredFieldCheck} recruitmentId={recruitmentId} />
        <Divider />
        <RecruitDetail {...data} />
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.7;
  margin: 70px 0;
  padding: 0 100px;
  max-width: 1320px;
  background-color: #e9e9e9;
`;
