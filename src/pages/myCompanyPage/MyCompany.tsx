import Layout from '@/features/layout';
import { Flex, InnerContainer, Image } from '@/components/common';
import CompanyInfo from '@/pages/myPage/employer/Companies/CompanyInfo';
import { companyWrapperStyle, imageStyle, innerContainerStyle } from './MyCompany.styles';
import RecruitmentList from '@/pages/myCompanyPage/Recruitments/RecruitmentList';
import { CompanyData, RecruitmentItem } from '@/types';

interface MyCompanyProps {
  companyData: CompanyData | null;
  recruitmentsData: RecruitmentItem[] | null;
}

export default function MyCompany({ companyData, recruitmentsData }: MyCompanyProps) {
  return (
    <Layout>
      <div>
        <InnerContainer css={innerContainerStyle}>
          <Flex direction="column" alignItems="center" gap={{ y: '60px' }}>
            {companyData && (
              <Flex alignItems="center" gap={{ x: '150px' }} css={companyWrapperStyle}>
                <Image url={companyData.logoImage} size={{ width: '280px', height: '120px' }} css={imageStyle} />
                <CompanyInfo {...companyData} />
              </Flex>
            )}
            {recruitmentsData && <RecruitmentList recruitmentList={recruitmentsData} />}
          </Flex>
        </InnerContainer>
      </div>
    </Layout>
  );
}
