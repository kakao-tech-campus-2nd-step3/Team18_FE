import { List, Flex } from '@/components/common';
import RecruitmentCard from './RecruitmentCard';
import { RecruitmentItem } from '@/types';
import { responsiveStyle } from '@utils/responsive';

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
  recruitmentList: RecruitmentItem[];
};

export default function RecruitmentList({ recruitmentList }: Props) {
  return (
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
  );
}
