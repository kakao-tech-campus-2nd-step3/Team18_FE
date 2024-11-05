import { getDynamicAPIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useQuery } from '@tanstack/react-query';

export const getMyContractPath = (applyId: number) => `${getDynamicAPIPath.getContract(applyId)}`;
const getMyContract = async (applyId: number) => {
  const res = await clientInstance.get(getMyContractPath(applyId));
  return res.data;
};

export const useGetMyContract = (applyId: number) =>
  useQuery({
    queryKey: [getMyContractPath],
    queryFn: () => getMyContract(applyId),
  });
