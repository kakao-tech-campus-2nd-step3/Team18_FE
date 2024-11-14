import { renderWithProviders } from '@/__test__/test-utils';
import { screen } from '@testing-library/react';
import { server } from '@/mocks/server';
import { UserData } from '@/types';
import { userLocalStorage } from '@/utils/storage';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import EmployeeProfile from '../components/EmployeeProfile';
import ButtonGroup from '../components/ButtonGroup';

const mockEmployeeUser = { type: 'employee', profileImage: 'userProfileImage', name: '근로자이름' } as UserData;

const mockRequiredFieldCheckFalse = {
  resumeExistence: false,
  visaExistence: false,
  foreignerIdNumberExistence: false,
  signExistence: false,
};

const mockRequiredFieldCheckTrue = {
  resumeExistence: true,
  visaExistence: true,
  foreignerIdNumberExistence: true,
  signExistence: true,
};

let mockRequiredFieldCheck = mockRequiredFieldCheckFalse;

vi.mock('@/apis/recruitmentsDetail/useRequiredFieldCheck', () => {
  return {
    useGetRequiredFieldCheck: () => ({
      data: mockRequiredFieldCheck,
    }),
  };
});

describe('ProfileSection', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('사용자 이름을 프로필 UI에 띄운다.', () => {
    vi.spyOn(userLocalStorage, 'getUser').mockReturnValue(mockEmployeeUser);

    renderWithProviders(<EmployeeProfile />);

    const buttonText = screen.getByText(mockEmployeeUser.name);
    expect(buttonText).toBeInTheDocument();
  });

  it('이력서/서명/비자 등록 X -> 이력서/서명/비자 등록 버튼을 띄운다.', () => {
    mockRequiredFieldCheck = mockRequiredFieldCheckFalse;

    renderWithProviders(<ButtonGroup />);

    const resumeButton = screen.getByText('employeeMyPage.REGISTER_RESUME');
    const signButton = screen.getByText('employeeMyPage.REGISTER_SIGN');
    const visaButton = screen.getByText('employeeMyPage.REGISTER_VISA');
    expect(resumeButton).toBeInTheDocument();
    expect(signButton).toBeInTheDocument();
    expect(visaButton).toBeInTheDocument();
  });

  it('이력서/서명/비자 등록 O -> 이력서/서명/비자 등록 완료 버튼을 띄운다.', () => {
    mockRequiredFieldCheck = mockRequiredFieldCheckTrue;

    renderWithProviders(<ButtonGroup />);

    const resumeButton = screen.getByText('employeeMyPage.COMPLETE_RESUME');
    const signButton = screen.getByText('employeeMyPage.COMPLETE_SIGN');
    const visaButton = screen.getByText('employeeMyPage.COMPLETE_VISA');
    expect(resumeButton).toBeInTheDocument();
    expect(signButton).toBeInTheDocument();
    expect(visaButton).toBeInTheDocument();
  });
});
