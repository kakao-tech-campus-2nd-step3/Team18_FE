import { Meta, StoryObj } from '@storybook/react';
import EmployerMyPage from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '@/assets/styles/theme';

const meta: Meta<typeof EmployerMyPage> = {
  title: 'pages/myPage/employer',
  component: EmployerMyPage,
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

type Story = StoryObj<typeof EmployerMyPage>;

export const Default: Story = {};
