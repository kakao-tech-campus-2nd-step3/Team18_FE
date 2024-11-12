import { getDynamicAPIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useQuery } from '@tanstack/react-query';
import { type RecruitProps } from '@/pages/recruit/RecruitType';

const getRecruitmentsDetail = async (recruitmentId: number) => {
  const res = await clientInstance.get(getDynamicAPIPath.recruitmentsDetail(recruitmentId));
  return res.data;
};

export const useGetRecruitmentsDetail = (recruitmentId: number) =>
  useQuery<RecruitProps, Error>({
    queryKey: ['recruitmentsDetail', recruitmentId],
    queryFn: () => getRecruitmentsDetail(recruitmentId),
  });
