import { APIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { NoticeRequestData } from '@/types';
import { useMutation } from '@tanstack/react-query';

export const getPostNoticePath = () => `${APIPath.postNotice}`;

export const postNotice = async (req: NoticeRequestData) => {
  const response = await clientInstance.post(getPostNoticePath(), req);
  return response.data;
};

export const usePostNotice = () =>
  useMutation({
    mutationFn: postNotice,
  });
