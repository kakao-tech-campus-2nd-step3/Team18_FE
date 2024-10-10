import { Meta, StoryObj } from '@storybook/react';
import { EmployeeContract } from './EmployeeContract';

const meta: Meta<typeof EmployeeContract> = {
  title: 'pages/EmployeeContract',
  component: EmployeeContract,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmployeeContract>;

export const Default: Story = {};
