import Layout from '@/features/layout';
import { Flex, InnerContainer, Image, Typo, Button, Icon } from '@/components/common';
import CompanyLogo from '@assets/images/coupang.png';
import CompanyInfo from '@/features/companies/CompanyInfo';
import RecruitmentList from '@/features/recruitments/RecruitmentList';
import { company, recruitmentList } from '@/pages/myCompany/index.mock';
import { palettes } from '@/assets/styles/global/palettes';
import { buttonStyle, imageStyle, companyWrapperStyle } from './index.styles';

export default function MyCompany() {
  return (
    <Layout>
      <div>
        <InnerContainer css={{ padding: '60px 0 80px 0' }}>
          <Flex direction="column" gap={{ y: '60px' }}>
            <Flex justifyContent="space-between" alignItems="center" gap={{ x: '100px' }} css={companyWrapperStyle}>
              <Image url={CompanyLogo} size={{ width: '280px', height: '120px' }} css={imageStyle} />
              <CompanyInfo
                name={company.name}
                industryOccupation={company.industryOccupation}
                brand={company.brand}
                revenuePerYear={company.revenuePerYear}
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
            <RecruitmentList recruitmentsList={recruitmentList} />
          </Flex>
        </InnerContainer>
      </div>
    </Layout>
  );
}
