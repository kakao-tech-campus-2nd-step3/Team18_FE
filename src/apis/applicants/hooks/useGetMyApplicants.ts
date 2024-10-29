import { getDynamicAPIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useQuery } from '@tanstack/react-query';

const getMyApplicants = async (recruitmentId: number) => {
  const res = await clientInstance.get(getDynamicAPIPath.getMyApplicants(recruitmentId));
  return res.data;
};

export const useGetMyApplicants = (recruitmentId: number) =>
  useQuery({
    queryKey: ['myApplicants'],
    queryFn: () => getMyApplicants(recruitmentId),
  });
