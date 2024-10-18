import { InnerContainer, Flex } from '@components/common';
import { responsiveStyle, responsiveSectionPadding } from '@utils/responsive';
import Layout from '@features/layout';
import { recruitmentList } from './data/index.mock';
// import Worker from '@features/home/Worker';
import Employer from '@features/home/components/Employer';
import RecruitmentHeader from '@/features/home/components/common/RecruitmentHeader';
import RecruitmentFilter from '@/features/home/components/common/RecruitmentFilter';
import RecruitmentList from '@features/home/components/common/RecruitmentList';

const sectionStyle = responsiveStyle(responsiveSectionPadding);

export default function Home() {
  return (
    <Layout>
      {/* <Worker /> */}
      <Employer />
      <section css={sectionStyle}>
        <InnerContainer>
          <Flex justifyContent="space-between" alignItems="center">
            <RecruitmentHeader />
            <RecruitmentFilter />
          </Flex>
          <RecruitmentList recruitmentList={recruitmentList} />
        </InnerContainer>
      </section>
    </Layout>
  );
}
