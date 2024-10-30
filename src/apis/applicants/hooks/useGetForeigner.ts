import { getDynamicAPIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useQuery } from '@tanstack/react-query';

const getForeigner = async (userId: number) => {
  const res = await clientInstance.get(getDynamicAPIPath.getForeigner(userId));
  return res.data;
};

export const useGetForeigner = (userId: number) =>
  useQuery({
    queryKey: ['foreigner', userId],
    queryFn: () => getForeigner(userId),
  });
