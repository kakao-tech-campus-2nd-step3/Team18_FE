import styled from '@emotion/styled';
import RecruitCard from './RecruitCard';
import RecruitDetail from './RecruitDetail';
import Layout from '@/features/layout';
import cat from './cat.jpg';

const CardinitialData = {
  title: '김밥천국 채용 (1년 계약직)',
  companySize: '대기업',
  area: '대구 달서구',
  requestedCareer: '경력 1~2년',
  companyImage: cat,
};

const DeatilinitialData = {
  detailedDescription: '김밥 만들기 아르바이트',
  majorBusiness: [
    { id: 1, text: '김밥 만들기' },
    { id: 2, text: '재료 전처리' },
    { id: 3, text: '마감 청소' },
  ],
  eligibilityCriteria: [
    { id: 1, text: '비자를 가진 사람' },
    { id: 2, text: '주 2회 이상 근무 가능한 사람' },
  ],
  preferredConditions: [
    { id: 1, text: '한국어 의사 소통이 잘 되는 사람' },
    { id: 2, text: '지각하지 않는 사람' },
    { id: 3, text: '김밥에 있는 오이를 빼지 않는 사람' },
  ],
};

export default function Recruit() {
  return (
    <Layout>
      <Container>
        <RecruitCard
          title={CardinitialData.title}
          companySize={CardinitialData.companySize}
          area={CardinitialData.area}
          requestedCareer={CardinitialData.requestedCareer}
          companyImage={cat}
        />
        <Divider />
        <RecruitDetail
          detailedDescription={DeatilinitialData.detailedDescription}
          majorBusiness={DeatilinitialData.majorBusiness}
          eligibilityCriteria={DeatilinitialData.eligibilityCriteria}
          preferredConditions={DeatilinitialData.preferredConditions}
          companyImage={cat}
        />
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
  margin: 100px 0;
  padding: 0 100px;
  max-width: 1320px;
  background-color: #e9e9e9;
`;
