import { renderWithProviders } from '@/__test__/test-utils';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import Header from '..';
import { fireEvent, screen } from '@testing-library/react';
import { server } from '@/mocks/server';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';
import { userLocalStorage } from '@/utils/storage';
import { UserData } from '@/types';

const mockEmployeeUser = { type: 'employee', profileImage: 'userProfileImage', name: 'userName' } as UserData;
const mockEmployerUser = { type: 'employer', profileImage: 'employerProfileImage', name: 'employerName' } as UserData;

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe('Header 테스트', () => {
  const mockNavigate = vi.fn();

  beforeAll(() => {
    server.listen();
    vi.mocked(useNavigate).mockImplementation(() => mockNavigate);
  });
  afterEach(() => {
    server.resetHandlers();
    vi.clearAllMocks();
  });
  afterAll(() => server.close());

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('로고 클릭 시 홈페이지로 이동한다', () => {
    renderWithProviders(<Header />);
    const logo = document.querySelector('.logo');
    expect(logo).not.toBeNull();
    fireEvent.click(logo!);
    expect(mockNavigate).toHaveBeenCalledWith(ROUTE_PATH.HOME);
  });

  it('로컬 스토리지에 저장된 사용자의 타입이 employee이면 근로자 마이페이지로 이동한다', () => {
    vi.spyOn(userLocalStorage, 'getUser').mockReturnValue(mockEmployeeUser);

    renderWithProviders(<Header />);

    const profileImage = screen.getByTestId('profile');
    fireEvent.click(profileImage);

    expect(mockNavigate).toHaveBeenCalledWith(ROUTE_PATH.EMPLOYEE.EMPLOYEE_PAGE);
  });

  it('로컬 스토리지에 저장된 사용자의 타입이 employer이면 고용주 마이페이지로 이동한다', () => {
    vi.spyOn(userLocalStorage, 'getUser').mockReturnValue(mockEmployerUser);

    renderWithProviders(<Header />);

    const profileImage = screen.getByTestId('profile');
    fireEvent.click(profileImage);

    expect(mockNavigate).toHaveBeenCalledWith(ROUTE_PATH.MY_PAGE.EMPLOYER);
  });
});
