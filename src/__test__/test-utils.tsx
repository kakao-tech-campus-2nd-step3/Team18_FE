import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppProviders from '@/components/providers/index.provider';
import { ReactElement } from 'react';

export function renderWithProviders(ui: ReactElement) {
  return render(
    <MemoryRouter>
      <AppProviders>{ui}</AppProviders>
    </MemoryRouter>,
  );
}
