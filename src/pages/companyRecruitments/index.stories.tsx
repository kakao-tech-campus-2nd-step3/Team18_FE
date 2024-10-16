import { Meta, StoryObj } from '@storybook/react';
import CompanyRecruitments from '.';

const meta: Meta<typeof CompanyRecruitments> = {
  title: 'pages/CompanyRecruitments',
  component: CompanyRecruitments,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CompanyRecruitments>;

export const Default: Story = {};
