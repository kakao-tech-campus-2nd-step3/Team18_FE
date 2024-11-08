import { Languages } from '../Languages';

export const homeData = {
  [Languages.KO]: {
    greeting: {
      heading: `사장님,\n 공고 등록은 하셨나요? 🤔`,
      button: `등록하러 가기`,
    },
    recruitmentHeader: {
      heading: '어떤 일자리를 구하시나요?',
      description: '조건을 선택하고 원하는 일자리를 골라보세요.',
    },
    recruitmentFilter: {
      all: '전체',
      salary: '급여순',
      latestRegistration: '최신등록순',
    },
  },
  [Languages.VE]: {
    greeting: {
      heading: `Sếp ơi,\n đã đăng tin tuyển dụng chưa? 🤔`,
      button: `Đi đăng ký`,
    },
    recruitmentHeader: {
      heading: 'Bạn đang tìm công việc như thế nào?',
      description: 'Hãy chọn điều kiện và tìm công việc bạn muốn.',
    },
    recruitmentFilter: {
      all: 'Tất cả',
      salary: 'Theo lương',
      latestRegistration: 'Mới đăng ký',
    },
  },
};
