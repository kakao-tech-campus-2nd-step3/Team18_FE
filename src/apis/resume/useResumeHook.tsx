import { APIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const getResumePath = () => `${APIPath.resume}`;

export const Resume = async ({ req }: { req: string }) => {
  const response = await clientInstance.post(`${getResumePath()}`, req);
  return response.data;
};

export const FetchResume = () => {
  const nav = useNavigate();

  return useMutation({
    mutationFn: ({ data }: { data: string }) => Resume({ req: data }),
    onSuccess: () => {
      nav('/employee-my-page');
    },
  });
};
