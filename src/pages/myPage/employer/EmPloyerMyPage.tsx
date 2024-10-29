import { Button, Flex, Icon, InnerContainer, Spinner, Typo } from '@/components/common';
import Layout from '@/features/layout';
import CompanyList from '@/features/companies/CompanyList/CompanyList';
import { flexStyle, innerContainerStyle, signButtonStyle, spinnerFlexStyle, typoStyle } from './EmployerMyPage.styles';
import { useGetMyCompanies } from '@/apis/companies/hooks/useGetMyCompanies';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';

export default function EmployerMyPage() {
  const { data: companyList, isLoading } = useGetMyCompanies();
  const navigate = useNavigate();

  const handleSignButtonClick = () => {
    navigate(ROUTE_PATH.REGISTERSIGN);
  };

  return (
    <Layout>
      <div>
        <InnerContainer css={innerContainerStyle}>
          <Flex direction="column" gap={{ y: '60px' }} css={{ position: 'relative', minHeight: '600px' }}>
            <Flex justifyContent="space-between" alignItems="center" css={flexStyle}>
              <Typo element="h2" size="36px" style={typoStyle} bold>
                사장님, 안녕하세요!
              </Typo>
              <Button design="outlined" css={signButtonStyle} onClick={handleSignButtonClick}>
                <Flex justifyContent="space-between">
                  <Typo size="20px" bold>
                    사인 등록
                  </Typo>
                  <Icon.EmployeePage.Pen />
                </Flex>
              </Button>
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
