import { clientInstance } from '@apis/instance';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { RegisterRequest } from '../../types/request';
import { RegisterResponse } from '../../types/response';
import { APIPath } from '@/apis/apiPath';

const postRegister = async ({ type }: RegisterRequest): Promise<RegisterResponse> => {
  const res = await clientInstance.post(APIPath.postRegister, { type });
  return res.data;
};

export const useRegisterMutation = (): UseMutationResult<RegisterResponse, AxiosError, RegisterRequest> => {
  return useMutation<RegisterResponse, AxiosError, RegisterRequest>({
    mutationFn: postRegister,
  });
};
