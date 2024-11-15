import { Languages } from '../Languages';

export const registerVisaData = {
  [Languages.KO]: {
    title: '외국인 등록 번호 및 비자 발급 일자 등록',
    labels: {
      foreigner_number: '외국인 등록 번호',
      visa_generate_date: '비자 발급 일자',
    },
    error_message: '올바른 형식으로 입력해주세요. (형식: 000000-0000000)',
    submit: '등록하기',
    complete_message: '등록이 완료되었습니다.',
    button: '확인',
  },
  [Languages.VE]: {
    title: 'Đăng ký số đăng ký người nước ngoài và ngày cấp visa',
    labels: {
      foreigner_number: 'số đăng ký người nước ngoài',
      visa_generate_date: 'ngày cấp visa',
    },
    error_message: 'Vui lòng nhập đúng định dạng. (định dạng: 000000-0000000)',
    submit: 'Đăng ký',
    complete_message: 'Đăng ký đã hoàn tất.',
    button: 'Xác nhận',
  },
};
