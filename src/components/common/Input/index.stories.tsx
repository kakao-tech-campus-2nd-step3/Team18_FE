import { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'common/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: '아이디',
    placeholder: '아이디를 입력해주세요.',
  },
  render: (args) => <Input {...args} css={{ padding: '12px' }} />,
};
