import useToggle from '@/hooks/useToggle';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export interface ApplyInfoProps {
  name: string;
  address: string;
  phoneNumber: string;
  applyMotivation: string;
}

export function useApplyHook() {
  const [isToggle, toggle] = useToggle();
  const [formData, setFormData] = useState<ApplyInfoProps | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplyInfoProps>();

  const onSubmit: SubmitHandler<ApplyInfoProps> = (data) => {
    setFormData(data);
    toggle();
  };

  const handleApplySubmit = () => {
    // 추후 post 요청 여기서 하면 됨!.!
    if (formData) {
      console.log(formData);
      toggle();
    }
  };

  return {
    isToggle,
    toggle,
    register,
    handleSubmit,
    onSubmit,
    handleApplySubmit,
    errors,
  };
}
