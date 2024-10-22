import { AxiosError } from 'axios';
import { RecruitmentResponse } from '../types/response';
import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';
import { clientInstance } from '@apis/instance';
import { HOME_PATH } from '../path';
import { QUERY_KEYS } from './queryKeys';

const getRecruitments = async (): Promise<RecruitmentResponse[]> => {
  const res = await clientInstance.get<RecruitmentResponse[]>(HOME_PATH.RECRUITMENTS);
  return res.data;
};

export const useFetchRecruitments = (): UseSuspenseQueryResult<RecruitmentResponse[], AxiosError> => {
  return useSuspenseQuery<RecruitmentResponse[], AxiosError>({
    queryKey: [QUERY_KEYS.RECRUITMENTS],
    queryFn: () => getRecruitments(),
  });
};
