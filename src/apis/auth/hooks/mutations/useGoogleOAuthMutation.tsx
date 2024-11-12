import { clientInstance } from '@apis/instance';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { OAuthRequest } from '../../types/request';
import { OAuthResponse } from '../../types/response';
import { APIPath } from '@/apis/apiPath';

const postOAuth = async ({ code }: OAuthRequest): Promise<OAuthResponse> => {
  const res = await clientInstance.post(APIPath.postOAuth, { code });

  const authorizationHeader = res.headers['authorization'];
  const accessToken = authorizationHeader.replace('Bearer ', '');

  if (!accessToken) {
    throw new Error('Authorization header is missing in the response');
  }

  return {
    accessToken,
    type: res.data.type,
    profileImage: res.data.profileImage,
    name: res.data.name,
  };
};

export function useGoogleOAuthMutation() {
  return useMutation<OAuthResponse, AxiosError, OAuthRequest>({
    mutationFn: postOAuth,
  });
}
