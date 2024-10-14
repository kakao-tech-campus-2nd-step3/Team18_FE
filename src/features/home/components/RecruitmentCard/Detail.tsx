import { Typo } from '@components/common';
import { useRecruitmentCardContext } from './RecruitmentCard.context';
import { responsiveStyle } from '@utils/responsive';

const detailStyle = responsiveStyle({
  default: {
    marginBottom: '16px',
  },
  mobile: {
    fontSize: '14px',
  },
});

export default function Detail() {
  const { recruitment } = useRecruitmentCardContext();

  return (
    <Typo element="p" size="16px" color="gray" style={detailStyle}>
      {recruitment.area} / {recruitment.workHours}
    </Typo>
  );
}
