import { Meta, StoryObj } from '@storybook/react';
import Card from '.';

const meta: Meta<typeof Card> = {
  title: 'common/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    borderRadius: '12px',
    children: <h1>Hello World!</h1>,
  },
  render: (args) => (
    <Card {...args} css={{ padding: '12px 24px' }}>
      <h1>Hello World!</h1>
    </Card>
  ),
};
