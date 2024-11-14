import { renderWithProviders } from '@/__test__/test-utils';
import { screen } from '@testing-library/react';
import { server } from '@/mocks/server';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';
import ContractRegistrationForm from '../components/ContractRegistrationForm';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  return {
    ...(await vi.importActual('react-router-dom')),
    useNavigate: vi.fn(),
  };
});

describe('RegisterContract', () => {
  beforeAll(() => {
    server.listen();
    vi.mocked(useNavigate).mockImplementation(() => mockNavigate);
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderRegisterContract = () => {
    return renderWithProviders(<ContractRegistrationForm />);
  };

  it('근로계약서 정보를 입력하고 서명 후 폼을 제출한다', async () => {
    const { getByLabelText, getByRole } = renderRegisterContract();

    const workingPlaceInput = getByLabelText('contract.WORKING_PLACE');
    const responsibilitiesInput = getByLabelText('contract.RESPONSIBILITIES');
    const workingHoursInput = getByLabelText('contract.WORKING_HOURS');
    const dayOffInput = getByLabelText('contract.DAY_OFF');
    const salaryInput = getByLabelText('contract.SALARY');
    const annualPaidLeaveInput = getByLabelText('contract.ANNUAL_PAID_LEAVE');
    const ruleInput = getByLabelText('contract.RULE');

    fireEvent.change(workingPlaceInput, { target: { value: 'OO회사' } });
    fireEvent.change(responsibilitiesInput, { target: { value: '옷 포장' } });
    fireEvent.change(workingHoursInput, { target: { value: '주중 10:00-19:00' } });
    fireEvent.change(dayOffInput, { target: { value: '주말' } });
    fireEvent.change(salaryInput, { target: { value: 10000 } });
    fireEvent.change(annualPaidLeaveInput, { target: { value: '추후 협의' } });
    fireEvent.change(ruleInput, { target: { value: '열심히 일하기' } });

    fireEvent.click(getByRole('button', { name: 'contract.SIGN' }));
    fireEvent.click(getByRole('button', { name: 'contract.SUBMIT' }));

    await vi.waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(ROUTE_PATH.HOME);
    });
  });

  it('서명하지 않고 제출하면 메세지를 띄운다.', async () => {
    const { getByLabelText, getByRole } = renderRegisterContract();

    const workingPlaceInput = getByLabelText('contract.WORKING_PLACE');
    const responsibilitiesInput = getByLabelText('contract.RESPONSIBILITIES');
    const workingHoursInput = getByLabelText('contract.WORKING_HOURS');
    const dayOffInput = getByLabelText('contract.DAY_OFF');
    const salaryInput = getByLabelText('contract.SALARY');
    const annualPaidLeaveInput = getByLabelText('contract.ANNUAL_PAID_LEAVE');
    const ruleInput = getByLabelText('contract.RULE');

    fireEvent.change(workingPlaceInput, { target: { value: 'OO회사' } });
    fireEvent.change(responsibilitiesInput, { target: { value: '옷 포장' } });
    fireEvent.change(workingHoursInput, { target: { value: '주중 10:00-19:00' } });
    fireEvent.change(dayOffInput, { target: { value: '주말' } });
    fireEvent.change(salaryInput, { target: { value: 10000 } });
    fireEvent.change(annualPaidLeaveInput, { target: { value: '추후 협의' } });
    fireEvent.change(ruleInput, { target: { value: '열심히 일하기' } });

    fireEvent.click(getByRole('button', { name: 'contract.SUBMIT' }));

    await vi.waitFor(() => {
      const errorMessage = screen.getByText('contract.ERROR.SIGN');
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it('데이터를 입력하지 않고 제출하면 메세지를 띄운다.', async () => {
    const { getByLabelText, getByRole } = renderRegisterContract();

    const workingPlaceInput = getByLabelText('contract.WORKING_PLACE');
    const responsibilitiesInput = getByLabelText('contract.RESPONSIBILITIES');
    const workingHoursInput = getByLabelText('contract.WORKING_HOURS');
    const dayOffInput = getByLabelText('contract.DAY_OFF');
    const salaryInput = getByLabelText('contract.SALARY');
    const annualPaidLeaveInput = getByLabelText('contract.ANNUAL_PAID_LEAVE');

    fireEvent.change(workingPlaceInput, { target: { value: 'OO회사' } });
    fireEvent.change(responsibilitiesInput, { target: { value: '옷 포장' } });
    fireEvent.change(workingHoursInput, { target: { value: '주중 10:00-19:00' } });
    fireEvent.change(dayOffInput, { target: { value: '주말' } });
    fireEvent.change(salaryInput, { target: { value: 10000 } });
    fireEvent.change(annualPaidLeaveInput, { target: { value: '추후 협의' } });

    fireEvent.click(getByRole('button', { name: 'contract.SIGN' }));
    fireEvent.click(getByRole('button', { name: 'contract.SUBMIT' }));

    await vi.waitFor(() => {
      const errorMessage = screen.getByText('contract.ERROR.RULE');
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
