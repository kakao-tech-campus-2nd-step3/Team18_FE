import { getDynamicAPIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useQuery } from '@tanstack/react-query';

type IdProps = {
  resumeId: number;
  applyId: number;
};

export const getProfileInfo = async ({ resumeId, applyId }: IdProps) => {
  const response = await clientInstance.get(getDynamicAPIPath.getApplicantProfile(resumeId, applyId));
  return response.data;
};

export const useGetProfileInfo = ({ resumeId, applyId }: IdProps) =>
  useQuery({
    queryKey: [getDynamicAPIPath.getApplicantProfile(resumeId, applyId)],
    queryFn: () => getProfileInfo({ resumeId, applyId }),
  });
