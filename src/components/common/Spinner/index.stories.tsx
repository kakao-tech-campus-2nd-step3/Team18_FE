import { Meta, StoryObj } from '@storybook/react';
import Spinner from '.';

const meta: Meta<typeof Spinner> = {
  title: 'common/Spinner',
  component: Spinner,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
