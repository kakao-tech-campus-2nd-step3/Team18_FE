import { Meta, StoryObj } from '@storybook/react';
import MyCompany from '.';

const meta: Meta<typeof MyCompany> = {
  title: 'pages/MyCompany',
  component: MyCompany,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof MyCompany>;

export const Default: Story = {};
