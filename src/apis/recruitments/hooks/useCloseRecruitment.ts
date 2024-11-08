import { getDynamicAPIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useMutation } from '@tanstack/react-query';

export const closeRecruitment = async (recruitmentId: number) => {
  const response = await clientInstance.post(getDynamicAPIPath.closeRecruitment(recruitmentId));
  return response.data;
};

export const useCloseRecruitment = () =>
  useMutation({
    mutationFn: closeRecruitment,
  });
