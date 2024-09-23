import { Meta, StoryObj } from '@storybook/react';
import Flex from '.';

const meta: Meta<typeof Flex> = {
  title: 'common/Flex',
  component: Flex,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    direction: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    xGap: '10px',
    yGap: '10px',
  },
  render: (args) => (
    <Flex {...args}>
      <div style={boxStyle}>Box 1</div>
      <div style={boxStyle}>Box 2</div>
      <div style={boxStyle}>Box 3</div>
    </Flex>
  ),
};

const boxStyle = {
  width: '100px',
  height: '100px',
  backgroundColor: 'lightblue',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
