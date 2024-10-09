import { Typo } from '@components/common';
import { useRecruitmentCardContext } from './RecruitmentCard.context';
import { responsiveStyle } from '@utils/responsive';

export default function CompanyName() {
  const { recruitment } = useRecruitmentCardContext();

  return (
    <Typo
      element="p"
      size="16px"
      color="gray"
      style={responsiveStyle({
        default: {
          marginBottom: '4px',
        },
        mobile: {
          fontSize: '12px',
        },
      })}
    >
      {recruitment.companyName}
    </Typo>
  );
}
