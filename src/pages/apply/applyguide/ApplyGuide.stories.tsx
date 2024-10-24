import { Meta, StoryObj } from '@storybook/react';
import ApplyGuide from './ApplyGuide';

const meta: Meta<typeof ApplyGuide> = {
  title: 'PAGES/Apply/ApplyGuide',
  component: ApplyGuide,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
