import { InnerContainer, Flex, AsyncBoundary, Spinner, Pagination } from '@components/common';
import { responsiveStyle, responsiveSectionPadding } from '@utils/responsive';
import Layout from '@features/layout';
import RecruitmentHeader from '@features/home/components/common/RecruitmentHeader';
import RecruitmentFilter from '@features/home/components/common/RecruitmentFilter';
import RecruitmentList from '@features/home/components/common/RecruitmentList';
import ConditionalRenderer from '@features/home/components/ConditionalRenderer';
import { useRecruitmentData } from '@/features/home/hooks/useRecruitmentData';

const sectionStyle = responsiveStyle(responsiveSectionPadding);

export default function Home() {
  const { recruitmentList, page, totalPages, handleFilterChange, handlePageChange } = useRecruitmentData();

  return (
    <Layout>
      <ConditionalRenderer />
      <section css={sectionStyle}>
        <InnerContainer>
          <Flex justifyContent="space-between" alignItems="center">
            <RecruitmentHeader />
            <RecruitmentFilter onFilterChange={handleFilterChange} />
          </Flex>
          <AsyncBoundary pendingFallback={<Spinner />}>
            <RecruitmentList recruitmentList={recruitmentList} />
          </AsyncBoundary>
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
        </InnerContainer>
      </section>
    </Layout>
  );
}