import { Meta, StoryObj } from '@storybook/react';
import EmployeeMyPage from './EmployeeMyPage';

const meta: Meta<typeof EmployeeMyPage> = {
  title: 'pages/EmployeeMyPage',
  component: EmployeeMyPage,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmployeeMyPage>;

export const Default: Story = {};
