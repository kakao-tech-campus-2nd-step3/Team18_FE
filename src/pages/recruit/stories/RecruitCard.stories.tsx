import { Meta, StoryObj } from '@storybook/react';
import RecruitCard from '../RecruitCard';
import { RecruitCardProps } from '../RecruitCard';
import cat from '../cat.jpg';

const meta: Meta<RecruitCardProps> = {
  title: 'PAGES/Recruit/RecruitCard',
  component: RecruitCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    companySize: { control: 'text' },
    area: { control: 'text' },
    requestedCareer: { control: 'text' },
    companyImage: { control: 'text' },
  },
  args: {
    title: '김밥천국 채용 (1년 계약직)',
    companySize: '대기업',
    area: '대구 달서구',
    requestedCareer: '경력 1~2년',
    companyImage: cat,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
