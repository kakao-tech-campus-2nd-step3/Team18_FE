import { Typo } from '@components/common';
import { useRecruitmentCardContext } from './RecruitmentCard.context';
import { responsiveStyle } from '@utils/responsive';

const companyNameStyle = responsiveStyle({
  default: {
    marginBottom: '4px',
  },
  mobile: {
    fontSize: '12px',
  },
});

export default function CompanyName() {
  const { recruitment } = useRecruitmentCardContext();

  return (
    <Typo element="p" size="16px" color="gray" style={companyNameStyle}>
      {recruitment.companyName}
    </Typo>
  );
}
