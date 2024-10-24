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

export type StateProps = '근로계약서 서명하기' | '채용 마감' | '지원서 검토중' | '채용 완료';

export type MyRecruitListProps = {
  id: number;
  title: string;
  area: string;
  image: string;
  state: StateProps;
};
