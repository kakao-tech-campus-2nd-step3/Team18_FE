import { type SectionProps, type RecruitDetailProps } from './RecruitType';
import styled from '@emotion/styled';
import { Flex } from '@/components/common';

const SectionWithTitle = ({ title, children }: SectionProps) => (
  <Section>
    <TitleP>{title}</TitleP>
    <Flex
      direction="column"
      gap={{ y: '15px' }}
      css={{ border: '1px solid #e9e9e9', padding: '50px 30px', borderRadius: '3px', fontSize: '20px' }}
    >
      {children}
    </Flex>
  </Section>
);

const SectionConditions = ({ title, children }: SectionProps) => (
  <Flex gap={{ x: '10px' }} alignItems="center">
    <p css={{ fontSize: '18px', color: '#5E6670' }}>{title}</p>
    <p css={{ fontSize: '20px' }}>{children}</p>
  </Flex>
);

export default function RecruitDetail({
  detailedDescription,
  majorBusiness,
  eligibilityCriteria,
  preferredConditions,
  employerName,
  companyName,
  workDuration,
  workDays,
  workType,
  workHours,
  salary,
}: RecruitDetailProps) {
  return (
    <RecruitDetailContainer>
      <SectionWithTitle title="근무조건">
        <Flex
          css={{
            '@media (max-width: 1024px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Flex direction="column" gap={{ y: '15px' }}>
            <SectionConditions title="급여">{salary}</SectionConditions>
            <SectionConditions title="근무기간">{workDuration}</SectionConditions>
            <SectionConditions title="근무요일">{workDays}</SectionConditions>
            <SectionConditions title="근무시간">{workHours}</SectionConditions>
          </Flex>
          <Flex
            direction="column"
            gap={{ y: '15px' }}
            css={{
              '@media (max-width: 1024px)': {
                marginTop: '15px',
              },
            }}
          >
            <SectionConditions title="대표">{employerName}</SectionConditions>
            <SectionConditions title="회사명">{companyName}</SectionConditions>
            <SectionConditions title="고용형태">{workType}</SectionConditions>
          </Flex>
        </Flex>
      </SectionWithTitle>
      <SectionWithTitle title="지원자격">
        {eligibilityCriteria.map((data) => {
          return <li key={data.id}>{data.text}</li>;
        })}
      </SectionWithTitle>
      <SectionWithTitle title="상세설명">{detailedDescription}</SectionWithTitle>
      <SectionWithTitle title="주요업무">
        {majorBusiness.map((data) => {
          return <li key={data.id}>{data.text}</li>;
        })}
      </SectionWithTitle>

      <SectionWithTitle title="우대사항">
        {preferredConditions.map((data) => {
          return <li key={data.id}>{data.text}</li>;
        })}
      </SectionWithTitle>
    </RecruitDetailContainer>
  );
}

const RecruitDetailContainer = styled.div`
  width: 70%;
  max-width: 1325px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 70px;
  margin-bottom: 50px;
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
