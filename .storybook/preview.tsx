import React from 'react';
import type { Preview } from '@storybook/react';
import AppProviders from '../src/components/providers/index.provider';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { handlers } from '../src/mocks/handlers';
import { MemoryRouter } from 'react-router-dom';

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers: [...handlers],
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <AppProviders>
          <Story />
        </AppProviders>
      </MemoryRouter>
    ),
  ],
  loaders: [mswLoader],
};

export default preview;
