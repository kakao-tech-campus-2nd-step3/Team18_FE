import { Meta, StoryObj } from '@storybook/react';
import Header from '.';

const meta: Meta<typeof Header> = {
  title: 'features/layout/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <Header />,
};
