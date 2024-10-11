import { Meta, StoryObj } from '@storybook/react';
import Image from '.';

const IMAGE_URL =
  'https://img.freepik.com/free-photo/low-angle-view-of-skyscrapers_1359-1105.jpg?size=626&ext=jpg&ga=GA1.1.1297763733.1727740800&semt=ais_hybrid';

const meta: Meta<typeof Image> = {
  title: 'common/Image',
  component: Image,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    url: IMAGE_URL,
    size: {
      width: '350px',
      height: '275px',
    },
    borderRadius: '8px',
  },
};
