import { Image } from '@components/common';
import { useRecruitmentCardContext } from '../index.context';
import { responsiveStyle } from '@utils/responsive';

const IMAGE_SIZE_CONFIG = {
  width: '350px',
  height: '275px',
};

const companyImageStyle = responsiveStyle({
  default: {
    marginBottom: '24px',
  },
  mobile: {
    marginBottom: '18px',
    minWidth: '300px',
    minHeight: '250px',
  },
});

export default function CompanyImage() {
  const { recruitment } = useRecruitmentCardContext();

  return <Image url={recruitment.imageUrl} borderRadius="8px" size={IMAGE_SIZE_CONFIG} css={companyImageStyle} />;
}
