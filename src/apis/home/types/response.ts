import { RecruitmentListItem } from '@/types';

export type RecruitmentResponse = {
  content: RecruitmentListItem[];
  pageable: {
    totalPage: number;
  };
};

export type SlidesResponse = {
  id: number;
  imageUrl: string;
};
