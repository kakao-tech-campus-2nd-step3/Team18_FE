import useToggle from '@/hooks/useToggle';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface SelectContextProps {
  isOpen: boolean;
  toggle: () => void;
  selectedValue?: string;
  onItemSelect: (value: string) => void;
}

const SelectContext = createContext<SelectContextProps | undefined>(undefined);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('useSelectContext must be used within a useSelectContext');
  }
  return context;
};

export const SelectProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, toggle] = useToggle();
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  const handleItemSelect = (value: string) => {
    setSelectedValue(value);
    toggle();
  };

  return (
    <SelectContext.Provider value={{ isOpen, toggle, selectedValue, onItemSelect: handleItemSelect }}>
      {children}
    </SelectContext.Provider>
  );
};
