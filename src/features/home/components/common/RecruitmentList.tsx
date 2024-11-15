import { List, Flex } from '@/components/common';
import RecruitmentCard from './RecruitmentCard';
import { responsiveStyle } from '@utils/responsive';
import { RecruitmentResponse } from '@/apis/home/types/response';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';

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
  recruitmentList: RecruitmentResponse;
};

export default function RecruitmentList({ recruitmentList }: Props) {
  const navigate = useNavigate();

  const navigateRecruitmentDetailPage = (recruitmentId: number) => {
    navigate(`${ROUTE_PATH.RECRUIT.replace(':recruitmentId', String(recruitmentId))}`);
  };

  return (
    <Flex justifyContent="center" alignItems="center" wrap css={listContainerStyle}>
      <List
        items={recruitmentList.content}
        renderItem={(recruitment) => (
          <RecruitmentCard
            recruitment={recruitment}
            key={recruitment.recruitmentId}
            onClick={() => navigateRecruitmentDetailPage(recruitment.recruitmentId)}
          >
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