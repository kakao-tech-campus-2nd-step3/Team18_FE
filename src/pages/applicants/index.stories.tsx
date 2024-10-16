import { Meta, StoryObj } from '@storybook/react';
import Applicants from '.';

const meta: Meta<typeof Applicants> = {
  title: 'pages/Applicants',
  component: Applicants,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Applicants>;

export const Default: Story = {};
