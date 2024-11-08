export type CompanyData = {
  companyId: number;
  name: string;
  industryOccupation: string;
  brand: string;
  revenuePerYear: number;
  logoImage: string;
};

export type ApplicantData = {
  userId: number;
  name: string;
  resumeId: number;
  applyId: number;
  applicantNation: string;
  korean: string;
};

export type ForeignerData = {
  foreignerIdNumber: string;
  visaGenerateDate: string;
  visaExpiryDate: string;
};

export type UserData = {
  type: 'first' | 'employee' | 'employer';
  profileImage: string;
  name: string;
};

// 백엔드에서 정하는 값에 따라 key 바꾸면 됨
export const State = {
  LetsSign: '근로계약서 서명하기',
  Closed: '채용 마감',
  Waiting: '지원서 검토중',
  Completed: '근로계약서 다운로드',
} as const;

export type StateProps = keyof typeof State;
export type TextProps = (typeof State)[StateProps];

export type MyRecruitListProps = {
  id: number;
  title: string;
  area: string;
  image: string;
  state: StateProps;
  applyId: number;
};

export type RecruitmentItem = {
  recruitmentId: number;
  image: string;
  koreanTitle: string;
  vietnameseTitle: string;
  companyName: string;
  salary: number;
  workHours: string;
  area: string;
  hiring?: boolean;
};

export type NoticeRequestData = {
  title?: string;
  companyScale?: string;
  area?: string;
  salary?: string;
  workDuration?: string;
  workDays?: string;
  workType?: string;
  workHours?: string;
  requestedCareer?: string;
  majorBusiness?: string;
  eligibilityCriteria?: string;
  preferredConditions?: string;
  employerName?: string;
  companyName?: string;
};
