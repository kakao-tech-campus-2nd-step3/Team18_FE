import { InnerContainer } from '@components/common';
import { responsiveStyle, responsiveSectionPadding } from '@utils/responsive';
import Layout from '@features/layout';
import { recruitmentList } from './data/index.mock';
// import Worker from '@features/home/Worker';
import Employer from '@features/home/Employer';
import RecruitmentHeader from '@features/home/components/RecruitmentHeader';
import RecruitmentList from '@features/home/RecruitmentList';

export default function Home() {
  return (
    <Layout>
      {/* <Worker /> */}
      <Employer />
      <section css={responsiveStyle(responsiveSectionPadding)}>
        <InnerContainer>
          <RecruitmentHeader />
          <RecruitmentList recruitmentList={recruitmentList} />
        </InnerContainer>
      </section>
    </Layout>
  );
}
