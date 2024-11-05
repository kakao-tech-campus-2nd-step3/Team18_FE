import { Meta, StoryObj } from '@storybook/react';
import EmployerMyPage from './EmPloyerMyPage';

const meta: Meta<typeof EmployerMyPage> = {
  title: 'pages/EmployerMyPage',
  component: EmployerMyPage,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmployerMyPage>;

export const Default: Story = {};
