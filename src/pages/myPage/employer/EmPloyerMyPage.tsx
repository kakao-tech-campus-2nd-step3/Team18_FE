import { Button, Flex, Icon, InnerContainer, Spinner, Typo } from '@/components/common';
import Layout from '@/features/layout';
import CompanyList from '@/pages/myPage/employer/Companies/CompanyList';
import {
  flexStyle,
  innerContainerStyle,
  buttonStyle,
  spinnerFlexStyle,
  typoStyle,
  buttonGroupStyle,
} from './EmployerMyPage.styles';
import { useGetMyCompanies } from '@/apis/companies/hooks/useGetMyCompanies';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';
import { useTranslation } from 'react-i18next';
import { userLocalStorage } from '@/utils/storage';

export default function EmployerMyPage() {
  const { data: companyList, isLoading } = useGetMyCompanies();
  const userName = userLocalStorage.getUser()?.name;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToSignPage = () => {
    navigate(ROUTE_PATH.REGISTERSIGN);
  };

  const goToRegisterCompanyPage = () => {
    navigate(ROUTE_PATH.REGISTERCOMPANY);
  };

  return (
    <Layout>
      <div>
        <InnerContainer css={innerContainerStyle}>
          <Flex direction="column" gap={{ y: '60px' }} css={{ position: 'relative', minHeight: '600px' }}>
            <Flex justifyContent="space-between" alignItems="center" css={flexStyle}>
              <Typo element="h2" size="36px" style={typoStyle} bold>
                {t('employerMyPage.greeting', { name: userName })}
              </Typo>
              <Flex justifyContent="flex-end" alignItems="center" gap={{ x: '20px' }} css={buttonGroupStyle}>
                <Button design="outlined" css={buttonStyle} onClick={goToRegisterCompanyPage}>
                  <Flex justifyContent="space-between">
                    <Typo size="20px" bold>
                      {t('employerMyPage.register_company')}
                    </Typo>
                    <Icon.EmployeePage.Bag />
                  </Flex>
                </Button>
                <Button design="outlined" css={buttonStyle} onClick={goToSignPage}>
                  <Flex justifyContent="space-between">
                    <Typo size="20px" bold>
                      {t('employerMyPage.register_sign')}
                    </Typo>
                    <Icon.EmployeePage.Pen />
                  </Flex>
                </Button>
              </Flex>
            </Flex>
            {isLoading ? (
              <Flex justifyContent="center" alignItems="center" css={spinnerFlexStyle}>
                <Spinner />
              </Flex>
            ) : (
              companyList && <CompanyList companyList={companyList} />
            )}
          </Flex>
        </InnerContainer>
      </div>
    </Layout>
  );
}
