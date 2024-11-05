import { Meta, StoryObj } from '@storybook/react';
import MyCompany from './MyCompany';
import { company, recruitmentList } from './MyCompany.mock';

const meta: Meta<typeof MyCompany> = {
  title: 'pages/MyCompany',
  component: MyCompany,
  tags: ['autodocs'],
  args: { company, recruitmentList },
};

export default meta;

type Story = StoryObj<typeof MyCompany>;

export const Default: Story = {};
