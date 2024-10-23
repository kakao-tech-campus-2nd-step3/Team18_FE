import { clientInstance } from '@apis/instance';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { AUTH_PATH } from '../path';
import { RegisterRequest } from '../types/request';
import { RegisterResponse } from '../types/response';

const postRegister = async ({ type }: RegisterRequest): Promise<RegisterResponse> => {
  const res = await clientInstance.post(AUTH_PATH.REGISTER, { type });
  return res.data;
};

export const useRegister = (): UseMutationResult<RegisterResponse, AxiosError, RegisterRequest> => {
  return useMutation<RegisterResponse, AxiosError, RegisterRequest>({
    mutationFn: postRegister,
  });
};
