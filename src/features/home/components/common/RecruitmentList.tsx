import { List, Flex, Spinner, AsyncBoundary } from '@/components/common';
import RecruitmentCard from './RecruitmentCard';
import { responsiveStyle } from '@utils/responsive';
import { RecruitmentResponse } from '@/apis/home/types/response';

const listContainerStyle = responsiveStyle({
  default: {
    gap: '32px',
  },
  tablet: {
    gap: '26px',
  },
  mobile: {
    gap: '18px',
  },
});

type Props = {
  recruitmentList: RecruitmentResponse[];
};

export default function RecruitmentList({ recruitmentList }: Props) {
  return (
    <AsyncBoundary pendingFallback={<Spinner />}>
      <Flex justifyContent="center" alignItems="center" wrap css={listContainerStyle}>
        <List
          items={recruitmentList}
          renderItem={(recruitment) => (
            <RecruitmentCard recruitment={recruitment} key={recruitment.recruitmentId}>
              <RecruitmentCard.CompanyImage />
              <RecruitmentCard.CompanyName />
              <RecruitmentCard.Title />
              <RecruitmentCard.Salary />
              <RecruitmentCard.Detail />
              <RecruitmentCard.Button />
            </RecruitmentCard>
          )}
        />
      </Flex>
    </AsyncBoundary>
  );
}
