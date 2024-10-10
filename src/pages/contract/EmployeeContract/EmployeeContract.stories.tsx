import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '@/assets/styles/theme';
import { EmployeeContract } from './EmployeeContract';

const meta: Meta<typeof EmployeeContract> = {
  title: 'pages/EmployeeContract',
  component: EmployeeContract,
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

type Story = StoryObj<typeof EmployeeContract>;

export const Default: Story = {};
