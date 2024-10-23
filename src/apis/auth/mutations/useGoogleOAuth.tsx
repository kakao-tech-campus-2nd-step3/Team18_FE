import { clientInstance } from '@apis/instance';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { AUTH_PATH } from '../path';
import { OAuthRequest } from '../types/request';
import { OAuthResponse } from '../types/response';
import { useNavigate } from 'react-router-dom';
import { useCallback, useState, useEffect } from 'react';
import ROUTE_PATH from '@/routes/path';

const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;
const redirectUri = import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URI;

const getAccessTokenFromUrl = () => {
  const hashParams = new URLSearchParams(window.location.hash.substring(1));
  return hashParams.get('access_token');
};

const postOAuth = async ({ token }: OAuthRequest): Promise<OAuthResponse> => {
  const res = await clientInstance.post(AUTH_PATH.OAUTH, { token });

  const accessToken = res.headers['authorization'];
  if (!accessToken) {
    throw new Error('Authorization header is missing in the response');
  }

  return {
    accessToken,
    type: res.data.type,
    profileImage: res.data.profileImage,
  };
};

export function useGoogleOAuth(): {
  isLoading: boolean;
  redirectToGoogleLogin: () => void;
} {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const redirectToGoogleLogin = useCallback(() => {
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&include_granted_scopes=true&response_type=token&state=state_parameter_passthrough_value&redirect_uri=${redirectUri}&client_id=${clientId}`;

    window.location.href = googleAuthUrl;
  }, []);

  const { mutate: handleLoginPost, status } = useMutation<OAuthResponse, AxiosError, OAuthRequest>({
    mutationFn: postOAuth,
    onSuccess: (data) => {
      const { accessToken, type } = data;

      localStorage.setItem('token', accessToken);

      if (type === 'first') {
        navigate(ROUTE_PATH.AUTH.SIGN_UP);
      } else {
        navigate(ROUTE_PATH.HOME);
      }

      window.location.reload();
    },
    onError: (error) => {
      console.error('Error during login:', error);
      setIsLoading(false);
    },
  });

  const isMutating = status === 'pending';

  useEffect(() => {
    const token = getAccessTokenFromUrl();
    if (token) {
      setIsLoading(true);
      handleLoginPost({ token });
    } else {
      console.log('로그인 재시도하세요.');
    }
  }, [handleLoginPost]);

  return { isLoading: isLoading || isMutating, redirectToGoogleLogin };
}
