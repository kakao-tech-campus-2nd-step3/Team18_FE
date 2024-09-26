import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './index';
import Button from '../Button';

const meta = {
  title: 'common/Modal',
  tags: ['autodocs'],
  args: {
    textChildren: <p>정보를 입력해주세요.</p>,
    buttonChildren: <Button>등록할게요</Button>,
  },
  render: (props) => <Modal {...props} />,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
