import { Icon, InnerContainer, Typo } from '@/components/common';
import Layout from '@/features/layout';
import styled from '@emotion/styled';
import MyRecruitList from '../../../features/employee/myPage/MyRecruitList';
import CardButton from '../../../features/employee/myPage/CardButton';
import EmployeeProfile from '../../../features/employee/myPage/EmployeeProfile';
import { myRecruitList } from './data/index.mock';

export default function EmployeeMyPage() {
  return (
    <Layout>
      <InnerContainer style={{ justifyContent: 'center', width: '70%', padding: '60px 0' }}>
        <Section>
          <EmployeeProfile />
          <ColumnSection>
            <CardButton design="outlined">
              <Typo bold>이력서 등록</Typo>
              <Icon.EmployeePage.Bag />
            </CardButton>
            <CardButton design="outlined">
              <Typo bold>사인 등록</Typo>
              <Icon.EmployeePage.Pen />
            </CardButton>
            <CardButton design="outlined">
              <Typo bold>외국인 번호 및 비자 발급 일자 등록</Typo>
              <Icon.EmployeePage.Card />
            </CardButton>
          </ColumnSection>
        </Section>
        <Section>
          <Typo bold element="h3" size="20px" style={{ marginBottom: '24px' }}>
            내가 지원한 공고
          </Typo>
          <MyRecruitList myRecruitList={myRecruitList} />
        </Section>
      </InnerContainer>
    </Layout>
  );
}

const Section = styled.div`
  width: 100%;
  direction: column;
  align-items: center;
  margin-bottom: 52px;
`;

const ColumnSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
