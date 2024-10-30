import { Meta, StoryObj } from '@storybook/react';
import RecruitCard from '../RecruitCard';
import { RecruitCardProps } from '../RecruitType';
import cat from '../cat.jpg';

const meta: Meta<RecruitCardProps> = {
  title: 'PAGES/Recruit/RecruitCard',
  component: RecruitCard,
  tags: ['autodocs'],
  argTypes: {
    koreanTitle: { control: 'text' },
    companyScale: { control: 'text' },
    area: { control: 'text' },
    requestedCareer: { control: 'text' },
    imageUrl: { control: 'text' },
  },
  args: {
    koreanTitle: '김밥천국 채용 (1년 계약직)',
    companyScale: '대기업',
    area: '대구 달서구',
    requestedCareer: '경력 1~2년',
    imageUrl: cat,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
