import { Meta, StoryObj } from '@storybook/react';
import { EmployerContract } from './EmployerContract';

const meta: Meta<typeof EmployerContract> = {
  title: 'pages/EmployerContract',
  component: EmployerContract,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmployerContract>;

export const Default: Story = {};
