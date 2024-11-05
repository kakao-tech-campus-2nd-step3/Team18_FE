import { APIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useQuery } from '@tanstack/react-query';

const getMyCompanies = async () => {
  const res = await clientInstance.get(APIPath.getMyCompanies);
  return res.data;
};

export const useGetMyCompanies = () =>
  useQuery({
    queryKey: ['myCompanies'],
    queryFn: getMyCompanies,
  });
