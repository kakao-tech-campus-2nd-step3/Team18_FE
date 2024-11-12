import { bounceAnimation } from '@assets/styles/animations';
import { Card } from '@components/common';
import { ReactNode } from 'react';
import { RecruitmentCardContextProvider } from './index.context';
import { Title, Button, CompanyName, CompanyImage, Detail, Salary } from './sub-components';
import { responsiveStyle } from '@utils/responsive';
import { RecruitmentListItem } from '@features/home/types/types';
import { MouseEventHandler } from 'react';

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
  recruitment: RecruitmentListItem;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export default function RecruitmentCard({ recruitment, children, onClick }: Props) {
  return (
    <RecruitmentCardContextProvider recruitment={recruitment}>
      <Card borderColor="white" css={[bounceAnimation, recruitmentCardStyle]} onClick={onClick}>
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
