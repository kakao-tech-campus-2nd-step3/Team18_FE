export type BannerItem = {
  id: number;
  imageUrl;
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
};

export type CompanyData = {
  id: number;
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
  type: string;
  profileImage: string;
};
