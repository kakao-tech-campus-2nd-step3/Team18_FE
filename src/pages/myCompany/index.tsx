import Layout from '@/features/layout';
import { Flex, InnerContainer, Image, Typo, Button, Icon } from '@/components/common';
import CompanyLogo from '@assets/images/coupang.png';
import CompanyInfo from '@/features/companies/CompanyInfo';
import { palettes } from '@/assets/styles/global/palettes';
import { buttonStyle, imageStyle, companyWrapperStyle, innerContainerStyle } from './index.styles';
import RecruitmentList from '@/features/recruitments/RecruitmentList';
import { useParams } from 'react-router-dom';
import { useGetMyCompanies } from '@/apis/companies/hooks/useGetMyCompanies';
import { CompanyData, RecruitmentItem } from '@/types';
import { useGetMyRecruitments } from '@/apis/recruitments/hooks/useGetMyRecruitments';

interface MyCompanyProps {
  company?: CompanyData;
  recruitmentList?: RecruitmentItem[];
}

export default function MyCompany({ company, recruitmentList }: MyCompanyProps) {
  const { companyId } = useParams();
  const { data: companyList } = useGetMyCompanies();
  const { data: recruitments } = useGetMyRecruitments(Number(companyId));

  const companyData = company || companyList?.find((c: CompanyData) => c.companyId.toString() === companyId);
  const recruitmentsData = recruitmentList || recruitments;

  return (
    <Layout>
      <div>
        <InnerContainer css={innerContainerStyle}>
          <Flex direction="column" alignItems="center" gap={{ y: '60px' }}>
            <Flex justifyContent="space-between" alignItems="center" gap={{ x: '100px' }} css={companyWrapperStyle}>
              <Image url={CompanyLogo} size={{ width: '280px', height: '120px' }} css={imageStyle} />
              <CompanyInfo
                name={companyData.name}
                industryOccupation={companyData.industryOccupation}
                brand={companyData.brand}
                revenuePerYear={companyData.revenuePerYear}
              />
              <Button css={buttonStyle}>
                <Flex gap={{ x: '15px' }}>
                  <Typo size="16px" style={{ color: `${palettes.white}` }}>
                    회사 정보 수정하기
                  </Typo>
                  <Icon.Arrow.RightWhite />
                </Flex>
              </Button>
            </Flex>
            {recruitmentsData && <RecruitmentList recruitmentList={recruitmentsData} />}
          </Flex>
        </InnerContainer>
      </div>
    </Layout>
  );
}
