import { APIPath } from '@/apis/apiPath';
import { clientInstance } from '@/apis/instance';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const getRegisterSign = () => `${APIPath.registerSign}`;

export const RegisterSign = async (req: FormData) => {
  const response = await clientInstance.post(getRegisterSign(), req, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const FetchRegisterSign = (userType: string) => {
  const nav = useNavigate();

  return useMutation({
    mutationFn: (req: FormData) => RegisterSign(req),
    onSuccess: () => {
      if (userType === 'employer') {
        nav('/employer-my-page');
      } else if (userType === 'employee') {
        nav('/employee-my-page');
      } else {
        alert('오류');
      }
    },
  });
};
