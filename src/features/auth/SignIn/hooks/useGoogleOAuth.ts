import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';
import { useGoogleOAuthMutation } from '@/apis/auth/hooks/mutations/useGoogleOAuthMutation';
import { OAuthResponse } from '@/apis/auth/types/response';

const googleClientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;
const googleRedirectUri = import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URI;

const googleAuthUri = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${googleRedirectUri}&response_type=code&scope=email%20profile`;

const getAccessTokenFromUrl = () => {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get('code');
};

export function useGoogleOAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { mutate } = useGoogleOAuthMutation();

  const redirectToGoogleLogin = useCallback(() => {
    window.location.href = googleAuthUri;
  }, []);

  const handleLogin = useCallback(() => {
    const token = getAccessTokenFromUrl();

    if (token) {
      setIsLoading(true);
      mutate(
        { code: token },
        {
          onSuccess: (data: OAuthResponse) => {
            const { accessToken, type, profileImage, name } = data;
            localStorage.setItem('token', accessToken);
            localStorage.setItem('user', JSON.stringify({ profileImage, name, type }));

            if (type === 'first') {
              navigate(ROUTE_PATH.AUTH.SIGN_UP);
            } else {
              navigate(ROUTE_PATH.HOME);
            }

            window.location.reload();
          },
          onError: (error) => {
            console.error('Error during login:', error);
            alert('로그인에 실패했습니다. 다시 시도해주세요.');
            setIsLoading(false);
          },
        },
      );
    }
  }, [mutate, navigate]);

  useEffect(() => {
    handleLogin();
  }, [handleLogin]);

  return { isLoading, redirectToGoogleLogin };
}
