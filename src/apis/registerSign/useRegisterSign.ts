import { APIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useMutation } from '@tanstack/react-query';
// import { useNavigate } from 'react-router-dom';

export const getRegisterSign = () => `${APIPath.registerSign}`;

export const RegisterSign = async (req: FormData) => {
  const response = await clientInstance.post(getRegisterSign(), req, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const FetchRegisterSign = () => {
  // const nav = useNavigate();

  return useMutation({
    mutationFn: (req: FormData) => RegisterSign(req),
    onSuccess: () => {
      // 고용주, 근로자 구분 리다이렉트 추후 구현
      // nav('/');
    },
  });
};
