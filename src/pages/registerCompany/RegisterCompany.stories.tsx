import { Meta, StoryObj } from '@storybook/react';
import RegisterCompany from './RegisterCompany';

const meta: Meta<typeof RegisterCompany> = {
  title: 'pages/RegisterCompany',
  component: RegisterCompany,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RegisterCompany>;

export const Default: Story = {};
