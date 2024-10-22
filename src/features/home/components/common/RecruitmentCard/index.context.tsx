import { createContext, ReactNode, useContext } from 'react';
import { RecruitmentResponse } from '@/apis/home/types/response';

type RecruitmentCardContextProps = {
  recruitment: RecruitmentResponse;
};

const RecruitmentCardContext = createContext<RecruitmentCardContextProps | undefined>(undefined);

export const useRecruitmentCardContext = () => {
  const context = useContext(RecruitmentCardContext);

  if (!context) throw new Error('useRecruitmentCardContext must be used within a RecruitmentCard.Provider');

  return context;
};

interface ProviderProps {
  recruitment: RecruitmentResponse;
  children: ReactNode;
}

export const RecruitmentCardContextProvider = ({ recruitment, children }: ProviderProps) => {
  return <RecruitmentCardContext.Provider value={{ recruitment }}>{children}</RecruitmentCardContext.Provider>;
};
