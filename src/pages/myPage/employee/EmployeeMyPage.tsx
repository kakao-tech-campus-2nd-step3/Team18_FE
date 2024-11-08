import { Icon, InnerContainer, Typo } from '@/components/common';
import Layout from '@/features/layout';
import styled from '@emotion/styled';
import MyRecruitList from '../../../features/employee/myPage/MyRecruitList';
import CardButton from '../../../features/employee/myPage/CardButton';
import EmployeeProfile from '../../../features/employee/myPage/EmployeeProfile';
import { useGetMyApplication } from '@/apis/employee/hooks/useGetMyApplication';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';
import { useTranslation } from 'react-i18next';
import { userLocalStorage } from '@/utils/storage';

export default function EmployeeMyPage() {
  const { t } = useTranslation();
  const { data: myRecruitList } = useGetMyApplication();
  const navigate = useNavigate();

  const profileImage = userLocalStorage.getUser()?.profileImage;

  return (
    <Layout>
      <InnerContainer style={{ justifyContent: 'center', width: '70%', padding: '60px 0' }}>
        <Section>
          <EmployeeProfile profileImage={profileImage} />
          <ColumnSection>
            <CardButton
              design="outlined"
              onClick={() => {
                navigate(ROUTE_PATH.RESUME);
              }}
            >
              <Typo bold>{t('employeeMyPage.REGISTER_RESUME')}</Typo>
              <Icon.EmployeePage.Bag />
            </CardButton>
            <CardButton
              design="outlined"
              onClick={() => {
                navigate(ROUTE_PATH.REGISTERSIGN);
              }}
            >
              <Typo bold>{t('employeeMyPage.REGISTER_SIGN')}</Typo>
              <Icon.EmployeePage.Pen />
            </CardButton>
            <CardButton
              design="outlined"
              onClick={() => {
                navigate(ROUTE_PATH.REGISTER_VISA);
              }}
            >
              <Typo bold>{t('employeeMyPage.REGISTER_VISA')}</Typo>
              <Icon.EmployeePage.Card />
            </CardButton>
          </ColumnSection>
        </Section>
        <Section>
          <Typo bold element="h3" size="20px" style={{ marginBottom: '24px' }}>
            {t('employeeMyPage.MYRECRUITLIST')}
          </Typo>
          {myRecruitList && <MyRecruitList myRecruitList={myRecruitList} />}
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
