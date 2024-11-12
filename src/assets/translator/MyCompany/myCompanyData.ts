import { Languages } from '../Languages';

export const myCompanyData = {
  [Languages.KO]: {
    my_recruitments: '내 공고글',
    total_recruitments: '총 {{count}}건',
    table_headers: {
      location: '근무지',
      title: '공고 제목',
    },
    buttons: {
      view_applicants: '지원자 보러가기',
      close_recruitment: '마감하기',
      closed_recruitment: '마감완료',
    },
  },
  [Languages.VE]: {
    my_recruitments: 'Thông báo tuyển dụng của tôi',
    total_recruitments: 'Tổng cộng {{count}} bài',
    table_headers: {
      location: 'Nơi làm việc',
      title: 'Tiêu đề thông báo',
    },
    buttons: {
      view_applicants: 'Xem người ứng tuyển',
      close_recruitment: 'Đóng tuyển dụng',
      closed_recruitment: 'Đã đóng tuyển dụng',
    },
  },
};
