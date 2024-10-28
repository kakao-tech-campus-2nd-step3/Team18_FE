import { APIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { CompanyData } from '@/types';
import { useQuery } from '@tanstack/react-query';

const getMyCompanies = async () => {
  const res = await clientInstance.get<CompanyData[]>(APIPath.allCompanies);
  return res.data;
};

export const useGetMyCompanies = () =>
  useQuery({
    queryKey: ['myCompanies'],
    queryFn: getMyCompanies,
  });
