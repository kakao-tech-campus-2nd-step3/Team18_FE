import { Meta, StoryObj } from '@storybook/react';
import { RecruitDetailProps } from '../RecruitType';
import RecruitDetail from '../RecruitDetail';

const meta: Meta<RecruitDetailProps> = {
  title: 'PAGES/Recruit/RecruitDetail',
  component: RecruitDetail,
  tags: ['autodocs'],
  argTypes: {
    majorBusiness: { control: 'object', description: 'id와 text 객체를 추가 및 수정해보십쇼!' },
    eligibilityCriteria: { control: 'object' },
    preferredConditions: { control: 'object' },
    employerName: { control: 'text' },
    companyName: { control: 'text' },
    koreanDetailedDescription: { control: 'text' },
    vietnameseDetailedDescription: { control: 'text' },
    workDuration: { control: 'text' },
    workDays: { control: 'text' },
    workType: { control: 'text' },
    workHours: { control: 'text' },
    salary: { control: 'text' },
  },
  args: {
    majorBusiness: '김밥 만들기',
    eligibilityCriteria: '비자를 가진 사람',
    preferredConditions: '한국어 의사 소통이 잘 되는 사람',
    employerName: '이재용',
    companyName: '삼성전자',
    koreanDetailedDescription: '김밥 만들기 아르바이트',
    vietnameseDetailedDescription: 'hi',
    workDuration: '3달',
    workDays: '주 2회',
    workType: '파트타임',
    workHours: '오전 11시 ~ 오후 1시',
    salary: '최저시급',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
