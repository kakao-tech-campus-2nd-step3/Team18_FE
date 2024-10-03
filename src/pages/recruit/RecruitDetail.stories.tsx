import { Meta, StoryObj } from '@storybook/react';
import { RecruitDetailProps } from '.';
import RecruitDetail from './RecruitDetail';
import cat from './cat.jpg';

const meta: Meta<RecruitDetailProps> = {
  title: 'PAGES/Recruit/RecruitDetail',
  component: RecruitDetail,
  tags: ['autodocs'],
  argTypes: {
    detailedDescription: { control: 'text' },
    majorBusiness: { control: 'object', description: 'id와 text 객체를 추가 및 수정해보십쇼!' },
    eligibilityCriteria: { control: 'object' },
    preferredConditions: { control: 'object' },
    companyImage: { control: 'text' },
  },
  args: {
    detailedDescription: '김밥 만들기 아르바이트',
    majorBusiness: [
      { id: 1, text: '김밥 만들기' },
      { id: 2, text: '재료 전처리' },
      { id: 3, text: '마감 청소' },
    ],
    eligibilityCriteria: [
      { id: 1, text: '비자를 가진 사람' },
      { id: 2, text: '주 2회 이상 근무 가능한 사람' },
    ],
    preferredConditions: [
      { id: 1, text: '한국어 의사 소통이 잘 되는 사람' },
      { id: 2, text: '지각하지 않는 사람' },
      { id: 3, text: '김밥에 있는 오이를 빼지 않는 사람' },
    ],
    companyImage: cat,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
