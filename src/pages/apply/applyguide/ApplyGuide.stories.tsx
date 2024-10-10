import { Meta, StoryObj } from '@storybook/react';
import ApplyGuide from './ApplyGuide';
import { BrowserRouter } from 'react-router-dom';

const meta: Meta<typeof ApplyGuide> = {
  title: 'PAGES/Apply/ApplyGuide',
  component: ApplyGuide,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
