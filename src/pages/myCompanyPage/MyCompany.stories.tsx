import { Meta, StoryObj } from '@storybook/react';
import MyCompany from './MyCompany';
import { company, recruitmentList } from './MyCompany.mock';

const meta: Meta<typeof MyCompany> = {
  title: 'pages/MyCompany',
  component: MyCompany,
  tags: ['autodocs'],
  argTypes: {
    companyData: { control: 'object' },
    recruitmentsData: { control: 'object' },
  },
  args: {
    companyData: company,
    recruitmentsData: recruitmentList,
  },
};

export default meta;

type Story = StoryObj<typeof MyCompany>;

export const Default: Story = {};
