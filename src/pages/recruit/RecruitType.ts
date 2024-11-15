import { ReactNode } from 'react';

export interface RecruitCardProps {
  koreanTitle: string;
  vietnameseTitle?: string;
  companyScale: string;
  area: string;
  requestedCareer: string;
  imageUrl: string;
  recruitmentId: string;
  requiredFieldCheck?: RequiredFieldCheckProps;
}

export interface RecruitDetailProps {
  salary: string;
  workDuration: string;
  workDays: string;
  workType: string;
  workHours: string;
  majorBusiness: string;
  eligibilityCriteria: string;
  preferredConditions: string;
  employerName: string;
  companyName: string;
  koreanDetailedDescription: string;
  vietnameseDetailedDescription: string;
}

export type RecruitProps = RecruitCardProps & RecruitDetailProps;

export interface SectionProps {
  title: string;
  children: ReactNode;
}

export interface RequiredFieldCheckProps {
  resumeExistence: boolean;
  visaExistence: boolean;
  foreignerIdNumberExistence: boolean;
  signExistence?: boolean;
}
