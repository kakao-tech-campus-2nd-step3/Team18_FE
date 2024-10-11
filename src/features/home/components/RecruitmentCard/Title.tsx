import { Typo } from '@components/common';
import { useRecruitmentCardContext } from './RecruitmentCard.context';
import { responsiveStyle } from '@utils/responsive';

export default function Title() {
  const { recruitment } = useRecruitmentCardContext();

  return (
    <Typo
      element="h1"
      size="20px"
      bold
      style={responsiveStyle({
        default: {
          marginBottom: '12px',
        },
        mobile: {
          marginBottom: '8px',
          fontSize: '16px',
        },
      })}
    >
      {recruitment.koreanTitle} / {recruitment.vietnameseTitle}
    </Typo>
  );
}
