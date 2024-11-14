import { renderWithProviders } from '@/__test__/test-utils';
import { server } from '@/mocks/server';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import VisaRegistrationForm from '../VisaRegistrationForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fireEvent, screen, waitFor } from '@testing-library/react';

const queryClient = new QueryClient();

describe('VisaRegistrationForm 테스트', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderVisaRegistrationForm = () => {
    return renderWithProviders(
      <QueryClientProvider client={queryClient}>
        <VisaRegistrationForm />
      </QueryClientProvider>,
    );
  };

  it('외국인 등록 번호와 비자 발급 일자를 올바르게 입력하고 폼을 제출한다', async () => {
    const { getByLabelText, getByRole } = renderVisaRegistrationForm();

    const foreignerNumberInput = getByLabelText('registerVisa.labels.foreigner_number');
    const visaDateInput = getByLabelText('registerVisa.labels.visa_generate_date');

    fireEvent.change(foreignerNumberInput, { target: { value: '123456-1234567' } });
    fireEvent.change(visaDateInput, { target: { value: '2024-01-01' } });
    fireEvent.submit(getByRole('button', { name: 'registerVisa.submit' }));

    const completeMessage = await screen.findByText('registerVisa.complete_message');
    expect(completeMessage).toBeInTheDocument();
  });

  it('잘못된 외국인 등록 번호를 입력하면 에러 메시지를 표시하고 버튼이 비활성화된다', async () => {
    const { getByLabelText, getByRole } = renderVisaRegistrationForm();
    const foreignerNumberInput = getByLabelText('registerVisa.labels.foreigner_number');
    const submitButton = getByRole('button', { name: 'registerVisa.submit' });

    fireEvent.change(foreignerNumberInput, { target: { value: 'wrong-format' } });
    fireEvent.submit(submitButton);

    const errorMessage = await screen.findByText('registerVisa.error_message');
    expect(errorMessage).toBeInTheDocument();

    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
  });
});
