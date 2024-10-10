import { Meta, StoryObj } from '@storybook/react';
import SignUp from '.';

const meta: Meta<typeof SignUp> = {
  title: 'pages/SignUp',
  component: SignUp,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SignUp>;

export const Default: Story = {};
