import { describe, it, expect, vi, beforeEach, MockedFunction } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { SignInButton } from '../SignIn/components/SignInButton';
import { useGoogleOAuth } from '../SignIn/hooks/useGoogleOAuth';
import { renderWithProviders } from '@/__test__/test-utils';

vi.mock('../SignIn/hooks/useGoogleOAuth');

describe('SignInButton 컴포넌트', () => {
  const mockRedirectToGoogleLogin = vi.fn();
  const mockedUseGoogleOAuth = useGoogleOAuth as MockedFunction<typeof useGoogleOAuth>;

  beforeEach(() => {
    vi.clearAllMocks();
    mockedUseGoogleOAuth.mockReturnValue({
      isLoading: false,
      redirectToGoogleLogin: mockRedirectToGoogleLogin,
    });
  });

  it('구글 로그인 버튼이 올바르게 렌더링된다', () => {
    renderWithProviders(<SignInButton />);

    const buttonElement = screen.getByRole('button', { name: /Sign up with Google/i });
    expect(buttonElement).toBeInTheDocument();

    const googleIcon = screen.getByTestId('google-icon');
    expect(googleIcon).toBeInTheDocument();
  });

  it('버튼 클릭 시 redirectToGoogleLogin 함수가 호출된다', () => {
    renderWithProviders(<SignInButton />);

    const buttonElement = screen.getByRole('button', { name: /Sign up with Google/i });
    fireEvent.click(buttonElement);

    expect(mockRedirectToGoogleLogin).toHaveBeenCalledTimes(1);
  });
});
