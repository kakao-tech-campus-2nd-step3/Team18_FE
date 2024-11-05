import { Meta, StoryObj } from '@storybook/react';
import PostNotice from './PostNotice';

const meta: Meta<typeof PostNotice> = {
  title: 'pages/PostNotice',
  component: PostNotice,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PostNotice>;

export const Default: Story = {};
