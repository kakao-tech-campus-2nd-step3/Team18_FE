import { Meta, StoryObj } from '@storybook/react';
import EmployerMyAccount from '.';

const meta: Meta<typeof EmployerMyAccount> = {
  title: 'pages/MyAccount/Employer',
  component: EmployerMyAccount,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmployerMyAccount>;

export const Default: Story = {};
