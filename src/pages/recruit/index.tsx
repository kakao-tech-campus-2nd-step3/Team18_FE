import Header from '@/features/layout/Header';
import Footer from '@/features/layout/footer';
import styled from '@emotion/styled';
import RecruitCard from './RecruitCard';

export interface RecruitCardProps {
  title: string;
  companySize: string;
  area: string;
  requestedCareer: string;
  companyImage?: string;
}

export default function Recruit() {
  return (
    <>
      <Header />
      <Container>
        <RecruitCard />
        <Divider />
      </Container>
      <Footer />
    </>
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
  opacity: 0.5;
  margin: 100px 0;
  padding: 0 100px;
  max-width: 1320px;
  background-color: #e9e9e9;
`;
