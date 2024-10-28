import { APIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useMutation } from '@tanstack/react-query';
// import { useNavigate } from 'react-router-dom';

export const getApply = () => `${APIPath.registerSign}`;

export const Apply = async ({ req, recruitmentId }: { req: string; recruitmentId: string }) => {
  const response = await clientInstance.post(`${getApply()}/${recruitmentId}`, req);
  return response.data;
};

export const FetchApply = () => {
  // const nav = useNavigate();

  return useMutation({
    mutationFn: ({ data, recruitmentId }: { data: string; recruitmentId: string }) =>
      Apply({ req: data, recruitmentId }),
    onSuccess: () => {
      // nav('/');
    },
  });
};
