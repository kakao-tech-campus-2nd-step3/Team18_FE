import { Typo } from '@components/common';
import { useRecruitmentCardContext } from '../index.context';
import { responsiveStyle } from '@utils/responsive';
import { useLanguage } from '@/components/providers/Language.provider';

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
  const { language } = useLanguage();

  return (
    <Typo element="h1" size="20px" bold style={titleStyle}>
      {language === 'ko' ? recruitment.koreanTitle : recruitment.vietnameseTitle}
    </Typo>
  );
}
