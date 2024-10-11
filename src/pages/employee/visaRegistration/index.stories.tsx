import { Meta, StoryObj } from '@storybook/react';
import VisaRegistration from '.';

const meta: Meta<typeof VisaRegistration> = {
  title: 'pages/VisaRegistration',
  component: VisaRegistration,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof VisaRegistration>;

export const Default: Story = {};
