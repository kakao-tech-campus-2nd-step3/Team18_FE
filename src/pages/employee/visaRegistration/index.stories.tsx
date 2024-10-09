import { Meta, StoryObj } from '@storybook/react';
import VisaRegistration from '.';
import { ThemeProvider } from '@emotion/react';
import theme from '@/assets/styles/theme';

const meta: Meta<typeof VisaRegistration> = {
  title: 'pages/VisaRegistration',
  component: VisaRegistration,
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

type Story = StoryObj<typeof VisaRegistration>;

export const Default: Story = {};
