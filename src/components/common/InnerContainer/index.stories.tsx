import { Meta, StoryObj } from '@storybook/react';
import InnerContainer from '.';
import Flex from '../Flex';

const meta: Meta<typeof InnerContainer> = {
  title: 'common/InnerContainer',
  component: InnerContainer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InnerContainer>;

export const Default: Story = {
  args: {
    maxWidth: '1000px',
  },
  render: (args) => (
    <InnerContainer {...args}>
      <Flex>
        <div style={boxStyle}>Box 1</div>
        <div style={boxStyle}>Box 2</div>
        <div style={boxStyle}>Box 3</div>
      </Flex>
    </InnerContainer>
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
