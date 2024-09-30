import { Meta, StoryObj } from '@storybook/react';
import SignIn from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '@/assets/styles/theme';

const meta: Meta<typeof SignIn> = {
  title: 'pages/SignIn',
  component: SignIn,
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

type Story = StoryObj<typeof SignIn>;

export const Default: Story = {};
