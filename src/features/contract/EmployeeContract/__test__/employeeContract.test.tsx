import { fireEvent, screen } from '@testing-library/react';
import { server } from '@/mocks/server';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { renderWithProviders } from '@/__test__/test-utils';
import ContractSection from '../components/ContractSection';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  return {
    ...(await vi.importActual('react-router-dom')),
    useNavigate: vi.fn(),
  };
});

describe('employeeContract', () => {
  beforeAll(() => {
    server.listen();
    vi.mocked(useNavigate).mockImplementation(() => mockNavigate);
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderContract = () => {
    return renderWithProviders(<ContractSection />);
  };

  it('근로계약서 데이터 잘 불려와짐', async () => {
    renderContract();

    expect(screen.getByText('contract.WORKING_PLACE')).toBeInTheDocument();
    expect(screen.getByText('contract.RESPONSIBILITIES')).toBeInTheDocument();
    expect(screen.getByText('contract.WORKING_HOURS')).toBeInTheDocument();
    expect(screen.getByText('contract.DAY_OFF')).toBeInTheDocument();
    expect(screen.getByText('contract.SALARY')).toBeInTheDocument();
    expect(screen.getByText('contract.ANNUAL_PAID_LEAVE')).toBeInTheDocument();
    expect(screen.getByText('contract.RULE')).toBeInTheDocument();
  });

  it('서명하지 않고 제출하면 메세지를 띄운다.', async () => {
    const { getByRole } = renderContract();

    fireEvent.click(getByRole('button', { name: 'contract.SUBMIT' }));

    await vi.waitFor(() => {
      const errorMessage = screen.getByText('contract.ERROR.SIGN');
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it('서명 후 제출한다.', async () => {
    const { getByRole } = renderContract();

    fireEvent.click(getByRole('button', { name: 'contract.SIGN' }));
    fireEvent.click(getByRole('button', { name: 'contract.SUBMIT' }));

    await vi.waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(ROUTE_PATH.HOME);
    });
  });
});
