import { useState } from 'react';
import useToggle from '@/hooks/useToggle';

export default function useApplyHook() {
  const [applyInfo, setApplyInfo] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    applyMotivation: '',
  });

  const [isToggle, toggle] = useToggle();

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setApplyInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const isFieldEmpty = Object.values(applyInfo).some((value) => value.trim() === '');
    if (isFieldEmpty) {
      alert('모든 값을 입력해주세요!!');
      return;
    }
    toggle();
  };

  const goAhead = () => {
    const NotError = true;
    if (NotError) {
      console.log('ApplyInfo:', applyInfo);
      alert('지원 완료!');
      toggle();
      // 나중에 리다이렉트 하기~,~
    }
  };

  return {
    applyInfo,
    handleChange,
    handleSubmit,
    isToggle,
    toggle,
    goAhead,
  };
}
