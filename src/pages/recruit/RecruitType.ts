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

interface Item {
  id: number;
  text: string;
}

export interface RecruitDetailProps {
  salary: string;
  workDuration: string;
  workDays: string;
  workType: string;
  workHours: string;
  detailedDescription: string;
  majorBusiness: Item[];
  eligibilityCriteria: Item[];
  preferredConditions: Item[];
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
}
