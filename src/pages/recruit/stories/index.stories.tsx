import { Meta, StoryObj } from '@storybook/react';
import Recruit from '..';

const meta: Meta<typeof Recruit> = {
  title: 'PAGES/Recruit',
  component: Recruit,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
