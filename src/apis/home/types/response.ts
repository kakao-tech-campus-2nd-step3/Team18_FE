import { RecruitmentListItem } from '@features/home/types/types';

export type RecruitmentResponse = {
  content: RecruitmentListItem[];
  pageable: {
    totalPage: number;
  };
};

export type SlidesResponse = {
  imageUrl: string;
};
