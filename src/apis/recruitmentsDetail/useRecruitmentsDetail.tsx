import { getDynamicAPIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useQuery } from '@tanstack/react-query';
import { type RecruitProps } from '@/pages/recruit/RecruitType';

const getRecruitmentsDetail = async (postId: string) => {
  const res = await clientInstance.get(getDynamicAPIPath.recruitmentsDetail(postId));
  return res.data;
};

export const useGetRecruitmentsDetail = (postId: string) =>
  useQuery<RecruitProps, Error>({
    queryKey: ['recruitmentsDetail', postId],
    queryFn: () => getRecruitmentsDetail(postId),
  });
