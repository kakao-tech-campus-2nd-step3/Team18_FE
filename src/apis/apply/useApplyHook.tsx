import { getDynamicAPIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const getApply = (recruitmentId: number) => `${getDynamicAPIPath.apply(recruitmentId)}`;

export const Apply = async ({ req, recruitmentId }: { req: string; recruitmentId: number }) => {
  const response = await clientInstance.post(`${getApply(recruitmentId)}`, req);
  return response.data;
};

export const FetchApply = () => {
  const nav = useNavigate();

  return useMutation({
    mutationFn: ({ data, recruitmentId }: { data: string; recruitmentId: number }) =>
      Apply({ req: data, recruitmentId }),
    onSuccess: () => {
      nav('/');
    },
  });
};
