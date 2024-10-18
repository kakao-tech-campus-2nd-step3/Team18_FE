import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { SelectOptionType } from '@/types/select';

type SelectStore = {
  selectedOption: SelectOptionType | null;
  setSelectedOption: (option: SelectOptionType) => void;
  initializeOption: (option: SelectOptionType) => void;
};

export const useSelectStore = create(
  persist<SelectStore>(
    (set) => ({
      selectedOption: null,
      setSelectedOption: (option) => set({ selectedOption: option }),
      initializeOption: (option) => set({ selectedOption: option }),
    }),
    {
      name: 'language',
    },
  ),
);
