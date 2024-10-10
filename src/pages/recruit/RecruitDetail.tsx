import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface Item {
  id: number;
  text: string;
}
export interface RecruitDetailProps {
  detailedDescription: string;
  majorBusiness: Item[];
  eligibilityCriteria: Item[];
  preferredConditions: Item[];
  companyImage?: string;
}

const SectionWithTitle = ({ title, children }: { title: string; children: ReactNode }) => (
  <Section>
    <TitleP>{title}</TitleP>
    {children}
  </Section>
);

export default function RecruitDetail({
  detailedDescription,
  majorBusiness,
  eligibilityCriteria,
  preferredConditions,
  companyImage,
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
