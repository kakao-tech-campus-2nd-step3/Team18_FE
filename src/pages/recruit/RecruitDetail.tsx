import { type SectionProps, type RecruitDetailProps } from './RecruitType';
import styled from '@emotion/styled';
import { Flex } from '@/components/common';
import { useTranslation } from 'react-i18next';
import { userLocalStorage } from '@/utils/storage';

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
  koreanDetailedDescription,
  vietnameseDetailedDescription,
}: RecruitDetailProps) {
  const { t } = useTranslation();
  const language = userLocalStorage.getLanguage();
  return (
    <RecruitDetailContainer>
      <SectionWithTitle title={t('recruit.conditions')}>
        <Flex
          css={{
            '@media (max-width: 1024px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Flex direction="column" gap={{ y: '15px' }}>
            <SectionConditions title={t('recruit.conditions_detail.salary')}>{salary}</SectionConditions>
            <SectionConditions title={t('recruit.conditions_detail.workDuration')}>{workDuration}</SectionConditions>
            <SectionConditions title={t('recruit.conditions_detail.workDays')}>{workDays}</SectionConditions>
            <SectionConditions title={t('recruit.conditions_detail.workHours')}>{workHours}</SectionConditions>
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
            <SectionConditions title={t('recruit.conditions_detail.employerName')}>{employerName}</SectionConditions>
            <SectionConditions title={t('recruit.conditions_detail.companyName')}>{companyName}</SectionConditions>
            <SectionConditions title={t('recruit.conditions_detail.workType')}>{workType}</SectionConditions>
          </Flex>
        </Flex>
      </SectionWithTitle>
      <SectionWithTitle title={t('recruit.eligibilityRequirements')}>{eligibilityCriteria}</SectionWithTitle>
      <SectionWithTitle title={t('recruit.detailedDescription')}>
        {language && language === 'ko' ? koreanDetailedDescription : vietnameseDetailedDescription}
      </SectionWithTitle>
      <SectionWithTitle title={t('recruit.mainResponsibilities')}>{majorBusiness}</SectionWithTitle>
      <SectionWithTitle title={t('recruit.PreferredRequirements')}>{preferredConditions}</SectionWithTitle>
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
