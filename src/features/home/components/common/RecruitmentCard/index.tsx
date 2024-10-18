import { RecruitmentItem } from '@/types';
import { bounceAnimation } from '@assets/styles/animations';
import { Card } from '@components/common';
import { ReactNode } from 'react';
import { RecruitmentCardContextProvider } from './index.context';
import { Title, Button, CompanyName, CompanyImage, Detail, Salary } from './sub-components';
import { responsiveStyle } from '@utils/responsive';

const recruitmentCardStyle = responsiveStyle({
  default: {
    padding: '24px',
    cursor: 'pointer',
  },
  mobile: {
    padding: '16px',
  },
});

type Props = {
  recruitment: RecruitmentItem;
  children: ReactNode;
};

export default function RecruitmentCard({ recruitment, children }: Props) {
  return (
    <RecruitmentCardContextProvider recruitment={recruitment}>
      <Card borderColor="white" css={[bounceAnimation, recruitmentCardStyle]}>
        {children}
      </Card>
    </RecruitmentCardContextProvider>
  );
}

RecruitmentCard.Title = Title;
RecruitmentCard.Button = Button;
RecruitmentCard.CompanyName = CompanyName;
RecruitmentCard.CompanyImage = CompanyImage;
RecruitmentCard.Detail = Detail;
RecruitmentCard.Salary = Salary;
