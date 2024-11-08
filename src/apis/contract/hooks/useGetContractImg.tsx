import { getDynamicAPIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useQuery } from '@tanstack/react-query';

export const getContractImgPath = (applyId: number) => `${getDynamicAPIPath.downloadContract(applyId)}`;
const getContractImg = async (applyId: number) => {
  const res = await clientInstance.get(getContractImgPath(applyId));
  return res.data;
};

export const useGetContractImg = (applyId: number) =>
  useQuery({
    queryKey: [getContractImgPath],
    queryFn: () => getContractImg(applyId),
  });
