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
  koreanLanguageLevel: string;
  contractExistence: boolean;
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

export type StateProps = '근로계약서 서명하기' | '채용마감' | '지원서 검토중' | '채용완료';

export type MyRecruitListProps = {
  id: number;
  title: string;
  area: string;
  image: string;
  status: StateProps;
  applyId: number;
};

export type RecruitmentItem = {
  recruitmentId: number;
  imageUrl: string;
  koreanTitle: string;
  vietnameseTitle: string;
  companyName: string;
  salary: number;
  workHours: string;
  area: string;
  hiring: boolean;
};

export type NoticeRequestData = {
  title?: string;
  companyScale?: string;
  area?: string;
  salary?: number;
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
  companyId?: number;
};