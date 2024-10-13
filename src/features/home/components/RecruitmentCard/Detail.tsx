import { Typo } from '@components/common';
import { useRecruitmentCardContext } from './RecruitmentCard.context';
import { responsiveStyle } from '@utils/responsive';

export default function Detail() {
  const { recruitment } = useRecruitmentCardContext();

  return (
    <Typo
      element="p"
      size="16px"
      color="gray"
      style={responsiveStyle({
        default: {
          marginBottom: '16px',
        },
        mobile: {
          fontSize: '14px',
        },
      })}
    >
      {recruitment.area} / {recruitment.workHours}
    </Typo>
  );
}
