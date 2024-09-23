import { Meta, StoryObj } from '@storybook/react';
import Footer from '.';
import GlobalStyles from '@/assets/styles/index';

const meta: Meta<typeof Footer> = {
  title: 'features/layout/Footer',
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
  component: Footer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => <Footer />,
};
