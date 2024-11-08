import { Meta, StoryObj } from '@storybook/react';
import Recruit from '..';
import { recruitmentsDetailMockHandler } from '@/apis/recruitmentsDetail/mock/recruitmentsDetailMockHandler';

const meta: Meta<typeof Recruit> = {
  title: 'PAGES/Recruit',
  component: Recruit,
  tags: ['autodocs'],
  parameters: {
    msw: {
      handlers: { ...recruitmentsDetailMockHandler },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
