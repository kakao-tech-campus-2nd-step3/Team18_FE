import { APIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useQuery } from '@tanstack/react-query';
import { type RequiredFieldCheckProps } from '@/pages/recruit/RecruitType';

const getRequiredFieldCheck = async () => {
  const res = await clientInstance.get(APIPath.requiredFieldCheck);
  return res.data;
};

export const useGetRequiredFieldCheck = () =>
  useQuery<RequiredFieldCheckProps, Error>({
    queryKey: ['RequiredFieldCheckProps'],
    queryFn: () => getRequiredFieldCheck(),
  });
