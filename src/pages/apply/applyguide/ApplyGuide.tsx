import Layout from '@/features/layout';
import styled from '@emotion/styled';
import { Typo } from '@/components/common';
import { ReactNode } from 'react';
import { guideMent } from './guideMent';
import { useNavigate } from 'react-router-dom';

const IndentText = ({ children }: { children: ReactNode }) => <Typo style={{ marginLeft: '20px' }}>{children}</Typo>;

const SpacingText = ({ children, bold }: { children: ReactNode; bold?: boolean }) => (
  <Typo style={{ marginTop: '10px' }} bold={bold}>
    {children}
  </Typo>
);

export default function ApplyGuide() {
  const nav = useNavigate();

  const navigateToApply = () => {
    nav('/apply');
  };

  return (
    <Layout>
      <ApplyContainer>
        <Wrapper>
          <TextArea>
            <SpacingText bold={true}>{guideMent[0].title}</SpacingText>
            <Typo>{guideMent[0].description}</Typo>
            <SpacingText bold={true}>{guideMent[1].title}</SpacingText>
            <IndentText>{guideMent[1].description}</IndentText>
            <SpacingText bold={true}>{guideMent[2].title}</SpacingText>
            {(guideMent[2].description as string[]).map((desc: string, index: number) => {
              return <IndentText key={index}>{desc}</IndentText>;
            })}
            <SpacingText>{guideMent[3].description}</SpacingText>
            <SpacingText>{guideMent[4].description}</SpacingText>
          </TextArea>
          <CustomBtn onClick={navigateToApply}>{guideMent[5].description}</CustomBtn>
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

const CustomBtn = styled.button`
  width: 220px;
  border-radius: 4px;
  background-color: #0a65cc;
  color: #fff;
  font-size: 16px;
  padding: 20px;
  margin-top: 20px;
  &:hover {
    background-color: #fff;
    color: #0a65cc;
    border: 1px solid #0a65cc;
    padding: 19px;
    cursor: pointer;
    transition: 'background-color 200ms';
  }
`;
