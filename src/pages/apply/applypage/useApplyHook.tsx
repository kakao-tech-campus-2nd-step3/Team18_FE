import useToggle from '@/hooks/useToggle';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FetchApply } from '@/apis/apply/useApplyHook';

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

  const mutation = FetchApply();
  const onSubmit: SubmitHandler<ApplyInfoProps> = (data) => {
    setFormData(data);
    toggle();
  };

  const handleApplySubmit = (recruitmentId: number) => {
    if (formData) {
      const data = JSON.stringify(formData);
      mutation.mutate({ data, recruitmentId });
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
