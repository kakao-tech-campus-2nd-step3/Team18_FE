import { Meta, StoryObj } from '@storybook/react';
import Home from '.';

const meta: Meta<typeof Home> = {
  title: 'pages/Home',
  component: Home,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {};
