import { Meta, StoryObj } from '@storybook/react';
import RegisterVisa from './RegisterVisa';

const meta: Meta<typeof RegisterVisa> = {
  title: 'pages/RegisterVisa',
  component: RegisterVisa,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RegisterVisa>;

export const Default: Story = {};
