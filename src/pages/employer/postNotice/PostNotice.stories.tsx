import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/assets/styles/theme';
import { PostNotice } from './PostNotice';

const meta: Meta<typeof PostNotice> = {
  title: 'pages/PostNotice',
  component: PostNotice,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof PostNotice>;

export const Default: Story = {};
