import { Typo } from '@components/common';
import { useRecruitmentCardContext } from '../index.context';
import { responsiveStyle } from '@utils/responsive';

const titleStyle = responsiveStyle({
  default: {
    marginBottom: '12px',
  },
  mobile: {
    marginBottom: '8px',
    fontSize: '16px',
  },
});

export default function Title() {
  const { recruitment } = useRecruitmentCardContext();

  return (
    <Typo element="h1" size="20px" bold style={titleStyle}>
      {recruitment.koreanTitle} / {recruitment.vietnameseTitle}
    </Typo>
  );
}
