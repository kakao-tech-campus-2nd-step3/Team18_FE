import { renderWithProviders } from '@/__test__/test-utils';
import { screen } from '@testing-library/react';
import { server } from '@/mocks/server';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';
import CompanyRegistrationForm from '../components/CompanyRegistrationForm';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  return {
    ...(await vi.importActual('react-router-dom')),
    useNavigate: vi.fn(),
  };
});

describe('RegisterCompany', () => {
  beforeAll(() => {
    server.listen();
    vi.mocked(useNavigate).mockImplementation(() => mockNavigate);
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderRegisterCompany = () => {
    return renderWithProviders(<CompanyRegistrationForm />);
  };

  it('회사 정보를 입력하고 폼을 제출한다', async () => {
    const { getByLabelText, getByRole } = renderRegisterCompany();

    const companyNameInput = getByLabelText('registerCompany.COMPANYNAME');
    const brandInput = getByLabelText('registerCompany.BRAND');
    const industryInput = getByLabelText('registerCompany.INDUSTRY_OCCUPATION');
    const revenueInput = getByLabelText('registerCompany.REVENUE_PERYEAR');

    fireEvent.change(companyNameInput, { target: { value: 'OO회사' } });
    fireEvent.change(brandInput, { target: { value: 'OO브랜드' } });
    fireEvent.change(industryInput, { target: { value: '의류' } });
    fireEvent.change(revenueInput, { target: { value: 100000 } });

    fireEvent.click(getByRole('button', { name: 'registerCompany.SUBMIT' }));

    await vi.waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(ROUTE_PATH.HOME);
    });
  });

  it('데이터를 입력하지 않고 제출하면 메세지를 띄운다.', async () => {
    const { getByLabelText, getByRole } = renderRegisterCompany();

    const companyNameInput = getByLabelText('registerCompany.COMPANYNAME');
    const brandInput = getByLabelText('registerCompany.BRAND');
    const industryInput = getByLabelText('registerCompany.INDUSTRY_OCCUPATION');

    fireEvent.change(companyNameInput, { target: { value: 'OO회사' } });
    fireEvent.change(brandInput, { target: { value: 'OO브랜드' } });
    fireEvent.change(industryInput, { target: { value: '의류' } });

    fireEvent.click(getByRole('button', { name: 'registerCompany.SUBMIT' }));

    await vi.waitFor(() => {
      const errorMessage = screen.getByText('registerCompany.ERROR.REVENUE_PERYEAR');
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
