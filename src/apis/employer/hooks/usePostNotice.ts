import { APIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useMutation } from '@tanstack/react-query';

export type NoticeRequestData = {
  title?: string;
  companyScale?: string;
  area?: string;
  salary?: string;
  workDuration?: string;
  workDays?: string;
  workType?: string;
  workHours?: string;
  requestedCareer?: string;
  majorBusiness?: string;
  eligibilityCriteria?: string;
  preferredConditions?: string;
  employerName?: string;
  companyName?: string;
};

export const getPostNoticePath = () => `${APIPath.postNotice}`;

export const postNotice = async (req: NoticeRequestData) => {
  const response = await clientInstance.post(getPostNoticePath(), req);
  return response.data;
};

export const FetchPostNotice = () =>
  useMutation({
    mutationFn: postNotice,
  });
