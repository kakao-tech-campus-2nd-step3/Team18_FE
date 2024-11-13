import { Languages } from '../Languages';

export const applicantsData = {
  [Languages.KO]: {
    applicant_list: '지원자 목록',
    total_applicants: '총 {{count}}명',
    view_details: '자세히 보러가기',
    table_headers: {
      name: '이름',
      nation: '국적',
      korean_language_level: '한국어 실력',
    },
    buttons: {
      view_resume: '지원서',
      create_contract: '계약하기',
      complete_contract: '계약완료',
    },
  },
  [Languages.VE]: {
    applicant_list: 'Danh sách ứng viên',
    total_applicants: 'Tổng cộng {{count}} người',
    view_details: 'Xem chi tiết',
    table_headers: {
      name: 'Tên',
      nation: 'Quốc tịch',
      korean_language_level: 'Trình độ tiếng Hàn',
    },
    buttons: {
      view_resume: 'Hồ sơ ứng viên',
      create_contract: 'Tạo hợp đồng',
      complete_contract: 'Hoàn thành hợp đồng',
    },
  },
};
