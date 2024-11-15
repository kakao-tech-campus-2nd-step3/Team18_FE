import { APIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useMutation } from '@tanstack/react-query';

export type ContractRequestData = {
  salary?: number;
  workingHours?: string;
  dayOff?: string;
  annualPaidLeave?: string;
  workingPlace?: string;
  responsibilities?: string;
  rule?: string;
  applyId?: number;
};

export const getPostContractPath = () => `${APIPath.makeContract}`;

export const postContract = async (req: ContractRequestData) => {
  const response = await clientInstance.post(getPostContractPath(), req);
  return response.data;
};

export const useFetchPostContract = () =>
  useMutation({
    mutationFn: postContract,
  });
