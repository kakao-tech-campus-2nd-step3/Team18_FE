import Layout from '@/features/layout';
import { Flex, InnerContainer, Image, Button } from '@/components/common';
import CompanyInfo from '@/pages/myPage/employer/Companies/CompanyInfo';
import { companyWrapperStyle, imageSize, imageStyle, ImageWrapper, innerContainerStyle } from './MyCompany.styles';
import RecruitmentList from '@/pages/myCompanyPage/Recruitments/RecruitmentList';
import { CompanyData, RecruitmentItem } from '@/types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';

interface MyCompanyProps {
  companyData: CompanyData;
  recruitmentsData: RecruitmentItem[] | null;
  companyId: string;
}

export default function MyCompany({ companyData, recruitmentsData, companyId }: MyCompanyProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToPostNotice = () => {
    navigate(ROUTE_PATH.POST_NOTICE.replace(':companyId', companyId));
  };

  return (
    <Layout>
      <div>
        <InnerContainer css={innerContainerStyle}>
          <Flex direction="column" alignItems="center" gap={{ y: '60px' }}>
            {companyData && (
              <Flex alignItems="center" gap={{ x: '150px' }} css={companyWrapperStyle}>
                <ImageWrapper>
                  <Image url={companyData.logoImage} size={imageSize} css={imageStyle} />
                </ImageWrapper>
                <CompanyInfo {...companyData} />
                <Button design="outlined" onClick={goToPostNotice} css={{ whiteSpace: 'nowrap' }}>
                  {t('myCompany.post_notice')}
                </Button>
              </Flex>
            )}
            {recruitmentsData && <RecruitmentList recruitmentList={recruitmentsData} />}
          </Flex>
        </InnerContainer>
      </div>
    </Layout>
  );
}
