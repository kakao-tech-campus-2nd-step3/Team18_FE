import { APIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useMutation } from '@tanstack/react-query';

export type SignEmployeeContractRequestData = {
  applyId?: number;
};

export const getPostSignEmployeeContractPath = () => `${APIPath.signEmployeeContract}`;

export const postSignEmployeeContract = async (req: SignEmployeeContractRequestData) => {
  const response = await clientInstance.post(getPostSignEmployeeContractPath(), req);
  return response.data;
};

export const usePostSignEmployeeContract = () =>
  useMutation({
    mutationFn: postSignEmployeeContract,
  });
