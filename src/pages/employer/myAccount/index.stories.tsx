import { Meta, StoryObj } from '@storybook/react';
import EmployerMyAccount from '../../employer/myAccount';
import { ThemeProvider } from '@emotion/react';
import theme from '@/assets/styles/theme';

const meta: Meta<typeof EmployerMyAccount> = {
  title: 'pages/MyAccount/employer',
  component: EmployerMyAccount,
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

type Story = StoryObj<typeof EmployerMyAccount>;

export const Default: Story = {};
