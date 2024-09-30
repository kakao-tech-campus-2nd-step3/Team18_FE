import { Meta, StoryObj } from '@storybook/react';
import Typo from '.';
import { PalettesTypes } from '@assets/styles/global/palettes';
import { ThemeProvider } from '@emotion/react';
import theme from '@/assets/styles/theme';

const meta: Meta<typeof Typo> = {
  title: 'common/Typo',
  component: Typo,
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

type Story = StoryObj<typeof Typo>;

export const Gray: Story = {
  args: {
    element: 'h1',
    size: '24px',
    color: 'gray' as PalettesTypes,
    children: 'Hello World!',
  },
};

export const Black: Story = {
  args: {
    element: 'span',
    size: '16px',
    color: 'black' as PalettesTypes,
    children: 'Hello World!',
  },
};
