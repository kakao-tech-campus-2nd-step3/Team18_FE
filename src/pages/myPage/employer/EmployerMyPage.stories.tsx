import { Meta, StoryObj } from '@storybook/react';
import EmployerMyPage from './EmPloyerMyPage';

const meta: Meta<typeof EmployerMyPage> = {
  title: 'pages/MyPage/Employer',
  component: EmployerMyPage,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmployerMyPage>;

export const Default: Story = {};
