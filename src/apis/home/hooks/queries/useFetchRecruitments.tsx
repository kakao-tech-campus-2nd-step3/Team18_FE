import { AxiosError } from 'axios';
import { RecruitmentResponse } from '../../types/response';
import { useSuspenseQuery, UseSuspenseQueryResult } from '@tanstack/react-query';
import { clientInstance } from '@apis/instance';
import { QUERY_KEYS } from './queryKeys';
import { getDynamicAPIPath } from '@/apis/apiPath';

const getRecruitments = async (filter: string, page: number): Promise<RecruitmentResponse> => {
  const url = `${getDynamicAPIPath.getRecruitments(filter)}?page=${page}`;
  const res = await clientInstance.get<RecruitmentResponse>(url);
  return res.data;
};

export const useFetchRecruitments = (
  filter: string,
  page: number,
): UseSuspenseQueryResult<RecruitmentResponse, AxiosError> => {
  return useSuspenseQuery<RecruitmentResponse, AxiosError>({
    queryKey: [QUERY_KEYS.RECRUITMENTS, filter, page],
    queryFn: () => getRecruitments(filter, page),
  });
};
