import { SelectOptionType } from '@/types/select';
import { useState } from 'react';

const useSelect = (defaultOption: SelectOptionType) => {
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(defaultOption);

  const handleSelect = (option: SelectOptionType) => {
    if (option.value !== selectedOption.value) {
      setSelectedOption(option);
      option.action();
    }
  };

  return {
    selectedOption,
    handleSelect,
  };
};

export default useSelect;
