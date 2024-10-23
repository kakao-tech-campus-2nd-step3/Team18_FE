import { AxiosError } from 'axios';
import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';
import { clientInstance } from '@apis/instance';
import { HOME_PATH } from '../path';
import { SlidesResponse } from '../types/response';
import { QUERY_KEYS } from './queryKeys';

const getSlides = async (): Promise<SlidesResponse[]> => {
  const res = await clientInstance.get<SlidesResponse[]>(HOME_PATH.SLIDER);
  return res.data;
};

export const useFetchSlides = (): UseSuspenseQueryResult<SlidesResponse[], AxiosError> => {
  return useSuspenseQuery<SlidesResponse[], AxiosError>({
    queryKey: [QUERY_KEYS.SLIDES],
    queryFn: () => getSlides(),
  });
};
