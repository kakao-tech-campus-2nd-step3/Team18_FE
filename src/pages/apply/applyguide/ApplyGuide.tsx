import Layout from '@/features/layout';
import styled from '@emotion/styled';
import { Typo, Button } from '@/components/common';
import { ReactNode } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const IndentText = ({ children }: { children: ReactNode }) => <Typo style={{ marginLeft: '20px' }}>{children}</Typo>;

const SpacingText = ({ children, bold }: { children: ReactNode; bold?: boolean }) => (
  <Typo style={{ marginTop: '10px' }} bold={bold}>
    {children}
  </Typo>
);

export default function ApplyGuide() {
  const nav = useNavigate();
  const { recruitmentId } = useParams();
  const navigateToApply = () => {
    nav(`/apply/${recruitmentId}`);
  };
  const { t } = useTranslation();

  return (
    <Layout>
      <ApplyContainer>
        <Wrapper>
          <TextArea>
            <SpacingText bold={true}>{t('applyGuide.section1.title')}</SpacingText>
            <Typo>{t('applyGuide.section1.description')}</Typo>
            <SpacingText bold={true}>{t('applyGuide.section2.title')}</SpacingText>
            <IndentText>{t('applyGuide.section2.description')}</IndentText>
            <SpacingText bold={true}>{t('applyGuide.section3.title')}</SpacingText>
            <IndentText>{t('applyGuide.section3.description.description1')}</IndentText>
            <IndentText>{t('applyGuide.section3.description.description2')}</IndentText>
            <IndentText>{t('applyGuide.section3.description.description3')}</IndentText>
            <SpacingText>{t('applyGuide.section4.description')}</SpacingText>
            <SpacingText>{t('applyGuide.section5.description')}</SpacingText>
          </TextArea>
          <CustomBtn onClick={navigateToApply}>{t('applyGuide.section6.description')}</CustomBtn>
        </Wrapper>
      </ApplyContainer>
    </Layout>
  );
}

const ApplyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  max-width: 70%;
  margin: 100px;
  background-color: #f1f2f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  border-radius: 4px;
  @media (max-width: 768px) {
    margin: 70px 0px;
    max-width: 80%;
  }
  @media (max-width: 480px) {
    max-width: 90%;
  }
`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CustomBtn = styled(Button)`
  width: 220px;
  border-radius: 4px;
  background-color: #0a65cc;
  color: #fff;
  font-size: 16px;
  padding: 20px;
  margin: 20px;

  width: 220px;
  color: white;
  border: 1px solid #e4e5e8;
  &:hover {
    border: '2px solid #0A65CC';
    background: white;
    color: #0a65cc;
  }
  align-self: center;
`;
