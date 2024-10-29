import { APIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { ForeignerData } from '@/types';
import { useMutation } from '@tanstack/react-query';

type VisaRequest = Pick<ForeignerData, 'foreignerIdNumber' | 'visaGenerateDate'>;

const registerVisaInfo = async (req: VisaRequest) => {
  const res = await clientInstance.put(APIPath.registerVisa, req);
  return res.data;
};

export const useRegisterVisaInfo = () =>
  useMutation({
    mutationFn: registerVisaInfo,
  });
