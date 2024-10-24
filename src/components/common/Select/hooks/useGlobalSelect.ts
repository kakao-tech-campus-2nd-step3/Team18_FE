import { useSelectStore } from '@/store/selectStore';
import { SelectOptionType } from '@/types/select';
import { useEffect } from 'react';

const useGlobalSelect = (initialOption: SelectOptionType) => {
  const { selectedOption, setSelectedOption, initializeOption } = useSelectStore();

  useEffect(() => {
    if (!selectedOption) {
      initializeOption(initialOption);
    }
  }, [selectedOption, initializeOption, initialOption]);

  const handleSelect = (option: SelectOptionType) => {
    setSelectedOption(option);
    option.action();
  };

  return {
    selectedOption: selectedOption || initialOption,
    handleSelect,
  };
};

export default useGlobalSelect;
