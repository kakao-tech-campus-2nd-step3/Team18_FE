import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/assets/styles/theme';
import { EmployerContract } from './EmployerContract';

const meta: Meta<typeof EmployerContract> = {
  title: 'pages/EmployerContract',
  component: EmployerContract,
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

type Story = StoryObj<typeof EmployerContract>;

export const Default: Story = {};
