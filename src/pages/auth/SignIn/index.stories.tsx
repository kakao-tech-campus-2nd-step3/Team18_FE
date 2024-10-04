import { Meta, StoryObj } from '@storybook/react';
import SignIn from '.';

const meta: Meta<typeof SignIn> = {
  title: 'pages/SignIn',
  component: SignIn,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SignIn>;

export const Default: Story = {};
