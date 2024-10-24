import { APIPath } from '@/apis/apiPath';
import { BASE_URL, fetchInstanceWithAuth } from '@/apis/instance';
import { useQuery } from '@tanstack/react-query';

export const getMyApplicationPath = () => `${BASE_URL}${APIPath.allApplication}`;
const myApplicationQueryKey = [getMyApplicationPath()];

export const getMyApplication = async () => {
  const token = localStorage.getItem('token') ?? '';
  const response = await fetchInstanceWithAuth(token).get(getMyApplicationPath());
  return response.data;
};

export const useGetMyApplication = () =>
  useQuery({
    queryKey: myApplicationQueryKey,
    queryFn: getMyApplication,
  });
