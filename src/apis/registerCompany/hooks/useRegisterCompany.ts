import { APIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useMutation } from '@tanstack/react-query';

export type CompanyRequestData = {
  name?: string;
  industryOccupation?: string;
  brand?: string;
  revenuePerYear?: number;
  logoImage?: string;
};

export const getPostCompanyPath = () => `${APIPath.registerCompany}`;

export const postCompany = async (req: CompanyRequestData) => {
  const response = await clientInstance.post(getPostCompanyPath(), req);
  return response.data;
};

export const usePostCompany = () =>
  useMutation({
    mutationFn: postCompany,
  });
