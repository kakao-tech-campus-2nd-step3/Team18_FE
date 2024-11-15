import { renderWithProviders } from '@/__test__/test-utils';
import { screen } from '@testing-library/react';
import { server } from '@/mocks/server';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';
import PostNoticeForm from '../components/PostNoticeForm';

const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  return {
    ...(await vi.importActual('react-router-dom')),
    useNavigate: vi.fn(),
  };
});

describe('PostNoticeForm', () => {
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
    return renderWithProviders(<PostNoticeForm />);
  };

  it('구인글 정보를 입력하고 서명 후 폼을 제출한다', async () => {
    const { getByLabelText, getByRole } = renderRegisterContract();

    const titleInput = getByLabelText('postNotice.NOTICE_TITLE');
    const companyScaleInput = getByLabelText('postNotice.COMPANY_SCALE');
    const areaInput = getByLabelText('postNotice.AREA');
    const salaryInput = getByLabelText('postNotice.SALARY');
    const workDurationInput = getByLabelText('postNotice.WORKDURATION');
    const workDaysInput = getByLabelText('postNotice.WORKDAYS');
    const workTypeInput = getByLabelText('postNotice.WORKTYPE');
    const workHoursInput = getByLabelText('postNotice.WORKHOURS');
    const requestedCareerInput = getByLabelText('postNotice.REQUESTED_CAREER');
    const majorBusinessInput = getByLabelText('postNotice.MAJOR_BUSINESS');
    const eligibilityCriteriaInput = getByLabelText('postNotice.ELIGIBILITY_CRITERIA');
    const preferredConditionsInput = getByLabelText('postNotice.PREFERRED_CONDITIONS');
    const employerNameInput = getByLabelText('postNotice.EMPLOYER_NAME');
    const companyNameInput = getByLabelText('postNotice.COMPANY_NAME');

    fireEvent.change(titleInput, { target: { value: '제목' } });
    fireEvent.change(companyScaleInput, { target: { value: '회사규모' } });
    fireEvent.change(areaInput, { target: { value: '회사위치' } });
    fireEvent.change(salaryInput, { target: { value: 100000 } });
    fireEvent.change(workDurationInput, { target: { value: '근무기간' } });
    fireEvent.change(workDaysInput, { target: { value: '근무요일' } });
    fireEvent.change(workTypeInput, { target: { value: '고용형태' } });
    fireEvent.change(workHoursInput, { target: { value: '근무시간' } });
    fireEvent.change(requestedCareerInput, { target: { value: '지원조건' } });
    fireEvent.change(majorBusinessInput, { target: { value: '업무내용' } });
    fireEvent.change(eligibilityCriteriaInput, { target: { value: '비자조건' } });
    fireEvent.change(preferredConditionsInput, { target: { value: '우대사항' } });
    fireEvent.change(employerNameInput, { target: { value: '담당자명' } });
    fireEvent.change(companyNameInput, { target: { value: '회사명' } });

    fireEvent.click(getByRole('button', { name: 'postNotice.SUBMIT' }));

    await vi.waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(ROUTE_PATH.HOME);
    });
  });

  it('데이터를 입력하지 않고 제출하면 메세지를 띄운다.', async () => {
    const { getByLabelText, getByRole } = renderRegisterContract();

    const titleInput = getByLabelText('postNotice.NOTICE_TITLE');
    const companyScaleInput = getByLabelText('postNotice.COMPANY_SCALE');
    const areaInput = getByLabelText('postNotice.AREA');
    const salaryInput = getByLabelText('postNotice.SALARY');
    const workDurationInput = getByLabelText('postNotice.WORKDURATION');
    const workDaysInput = getByLabelText('postNotice.WORKDAYS');
    const workTypeInput = getByLabelText('postNotice.WORKTYPE');
    const workHoursInput = getByLabelText('postNotice.WORKHOURS');
    const requestedCareerInput = getByLabelText('postNotice.REQUESTED_CAREER');
    const majorBusinessInput = getByLabelText('postNotice.MAJOR_BUSINESS');
    const eligibilityCriteriaInput = getByLabelText('postNotice.ELIGIBILITY_CRITERIA');
    const preferredConditionsInput = getByLabelText('postNotice.PREFERRED_CONDITIONS');
    const employerNameInput = getByLabelText('postNotice.EMPLOYER_NAME');

    fireEvent.change(titleInput, { target: { value: '제목' } });
    fireEvent.change(companyScaleInput, { target: { value: '회사규모' } });
    fireEvent.change(areaInput, { target: { value: '회사위치' } });
    fireEvent.change(salaryInput, { target: { value: 100000 } });
    fireEvent.change(workDurationInput, { target: { value: '근무기간' } });
    fireEvent.change(workDaysInput, { target: { value: '근무요일' } });
    fireEvent.change(workTypeInput, { target: { value: '고용형태' } });
    fireEvent.change(workHoursInput, { target: { value: '근무시간' } });
    fireEvent.change(requestedCareerInput, { target: { value: '지원조건' } });
    fireEvent.change(majorBusinessInput, { target: { value: '업무내용' } });
    fireEvent.change(eligibilityCriteriaInput, { target: { value: '비자조건' } });
    fireEvent.change(preferredConditionsInput, { target: { value: '우대사항' } });
    fireEvent.change(employerNameInput, { target: { value: '담당자명' } });

    fireEvent.click(getByRole('button', { name: 'postNotice.SUBMIT' }));

    await vi.waitFor(() => {
      const errorMessage = screen.getByText('postNotice.ERROR.COMPANY_NAME');
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
