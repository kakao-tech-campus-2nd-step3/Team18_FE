import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen } from '@testing-library/react';
import ConditionalRenderer from '../components/ConditionalRenderer';
import { userLocalStorage } from '@/utils/storage';
import { UserData } from '@/types';
import { renderWithProviders } from '@/__test__/test-utils';

const mockEmployeeUser = { type: 'employee', profileImage: 'userProfileImage', name: 'userName' } as UserData;
const mockEmployerUser = { type: 'employer', profileImage: 'employerProfileImage', name: 'employerName' } as UserData;

describe('ConditionalRenderer 컴포넌트', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('userType이 "employee"일 때 Worker 컴포넌트를 렌더링한다', async () => {
    vi.spyOn(userLocalStorage, 'getUser').mockReturnValue(mockEmployeeUser);

    renderWithProviders(<ConditionalRenderer />);

    expect(screen.queryByText('home.greeting.heading')).not.toBeInTheDocument();
  });

  it('userType이 "employer"일 때 Employer 컴포넌트를 렌더링한다', () => {
    vi.spyOn(userLocalStorage, 'getUser').mockReturnValue(mockEmployerUser);

    renderWithProviders(<ConditionalRenderer />);

    const headingText = screen.getByText('home.greeting.heading');
    const buttonText = screen.getByText('home.greeting.button');

    expect(headingText).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });

  it('userType이 undefined일 때 Worker 컴포넌트를 렌더링한다', () => {
    vi.spyOn(userLocalStorage, 'getUser').mockReturnValue(undefined);

    renderWithProviders(<ConditionalRenderer />);

    expect(screen.queryByText('home.greeting.heading')).not.toBeInTheDocument();
  });
});
