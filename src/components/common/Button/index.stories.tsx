import type { Meta, StoryObj } from '@storybook/react';

import Button from './index';

const meta = {
  title: 'common/Button',
  tags: ['autodocs'],
  args: {
    children: '버튼',
    design: 'default',
  },
  render: (props) => <Button {...props} />,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Outlined: Story = { args: { design: 'outlined' } };
export const TextButton: Story = { args: { design: 'textbutton' } };
export const DeactivateButton: Story = { args: { design: 'deactivate' } };
