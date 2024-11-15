import { Meta, StoryObj } from '@storybook/react';
import Title from '.';

const meta: Meta<typeof Title> = {
  title: 'common/Title',
  component: Title,
  tags: ['autodocs'],
  args: {
    text: '스토리북',
  },
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {};
