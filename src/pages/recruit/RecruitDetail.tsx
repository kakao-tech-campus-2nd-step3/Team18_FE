import { ReactNode } from 'react';
import cat from './cat.jpg';
import styled from '@emotion/styled';
import { RecruitDetailProps } from './index';

const initialData: RecruitDetailProps = {
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

const SectionWithTitle = ({ title, children }: { title: string; children: ReactNode }) => (
  <Section>
    <TitleP>{title}</TitleP>
    {children}
  </Section>
);

export default function RecruitDetail({
  detailedDescription = initialData.detailedDescription,
  majorBusiness = initialData.majorBusiness,
  eligibilityCriteria = initialData.eligibilityCriteria,
  preferredConditions = initialData.preferredConditions,
  companyImage = cat,
}: RecruitDetailProps) {
  return (
    <RecruitDetailContainer>
      <CompanyImg src={companyImage} />
      <SectionWithTitle title="상세 설명">
        <p>{detailedDescription}</p>
      </SectionWithTitle>
      <SectionWithTitle title="주요 업무">
        {majorBusiness.map((data) => {
          return <li key={data.id}>{data.text}</li>;
        })}
      </SectionWithTitle>
      <SectionWithTitle title="지원 자격">
        {eligibilityCriteria.map((data) => {
          return <li key={data.id}>{data.text}</li>;
        })}
      </SectionWithTitle>
      <SectionWithTitle title="우대 사항">
        {preferredConditions.map((data) => {
          return <li key={data.id}>{data.text}</li>;
        })}
      </SectionWithTitle>
    </RecruitDetailContainer>
  );
}

const RecruitDetailContainer = styled.div`
  width: 80%;
  max-width: 1325px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 50px;
`;

const CompanyImg = styled.img<React.ImgHTMLAttributes<HTMLImageElement>>`
  width: 100%;
  height: 380px;
  border-radius: 20px;
  object-fit: cover;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    height: 300px;
    margin-bottom: 25px;
  }
  @media (max-width: 480px) {
    height: 220px;
    margin-bottom: 15px;
  }
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;

const TitleP = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;
