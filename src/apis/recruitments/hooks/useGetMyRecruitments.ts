import { getDynamicAPIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useQuery } from '@tanstack/react-query';

const getMyRecruitments = async (companyId: number) => {
  const res = await clientInstance.get(getDynamicAPIPath.getMyRecruitments(companyId));
  return res.data;
};

export const useGetMyRecruitments = (companyId: number) =>
  useQuery({
    queryKey: ['myRecruitments'],
    queryFn: () => getMyRecruitments(companyId),
  });
