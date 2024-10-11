import { Image } from '@components/common';
import { useRecruitmentCardContext } from './RecruitmentCard.context';
import { responsiveStyle } from '@utils/responsive';

export default function CompanyImage() {
  const { recruitment } = useRecruitmentCardContext();

  return (
    <Image
      url={recruitment.image}
      borderRadius="8px"
      size={{
        width: '350px',
        height: '275px',
      }}
      css={responsiveStyle({
        default: {
          marginBottom: '24px',
        },
        mobile: {
          marginBottom: '18px',
          minWidth: '300px',
          minHeight: '250px',
        },
      })}
    />
  );
}
