import { InnerContainer, Flex } from '@components/common';
import { responsiveStyle, responsiveSectionPadding } from '@utils/responsive';
import Layout from '@features/layout';
import RecruitmentHeader from '@features/home/components/common/RecruitmentHeader';
import RecruitmentFilter from '@features/home/components/common/RecruitmentFilter';
import RecruitmentList from '@features/home/components/common/RecruitmentList';
import ConditionalRenderer from '@features/home/components/ConditionalRenderer';

const sectionStyle = responsiveStyle(responsiveSectionPadding);

export default function Home() {
  return (
    <Layout>
      <ConditionalRenderer />
      <section css={sectionStyle}>
        <InnerContainer>
          <Flex justifyContent="space-between" alignItems="center">
            <RecruitmentHeader />
            <RecruitmentFilter />
          </Flex>
          <RecruitmentList />
        </InnerContainer>
      </section>
    </Layout>
  );
}
