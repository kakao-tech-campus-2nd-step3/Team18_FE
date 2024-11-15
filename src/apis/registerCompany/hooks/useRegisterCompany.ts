import { APIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useMutation } from '@tanstack/react-query';

export type CompanyRequestData = {
  name?: string;
  industryOccupation?: string;
  brand?: string;
  revenuePerYear?: number;
  logoImage?: File;
};

export const getPostCompanyPath = () => `${APIPath.registerCompany}`;

export const postCompany = async (req: FormData) => {
  const response = await clientInstance.post(getPostCompanyPath(), req, {
    headers: {
      Accept: 'multipart/form-data',
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const usePostCompany = () =>
  useMutation({
    mutationFn: postCompany,
  });
