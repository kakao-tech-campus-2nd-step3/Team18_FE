import { APIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useQuery } from '@tanstack/react-query';

export const getMyApplicationPath = () => `${APIPath.allApplication}`;

const myApplicationQueryKey = [getMyApplicationPath()];

export const getMyApplication = async () => {
  const response = await clientInstance.get(getMyApplicationPath());
  return response.data;
};

export const useGetMyApplication = () =>
  useQuery({
    queryKey: myApplicationQueryKey,
    queryFn: getMyApplication,
  });
