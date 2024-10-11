import { Meta, StoryObj } from '@storybook/react';
import EmployerMyAccount from '../../employer/myAccount';

const meta: Meta<typeof EmployerMyAccount> = {
  title: 'pages/Employer/MyAccount',
  component: EmployerMyAccount,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof EmployerMyAccount>;

export const Default: Story = {};
