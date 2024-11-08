import { Languages } from '../Languages';

export const employerMyPageData = {
  [Languages.KO]: {
    greeting: '{{name}}님, 안녕하세요!',
    register_company: '회사 등록',
    register_sign: '사인 등록',
    my_companies: '내 회사',
    total_companies: '총 {{count}} 곳',
    company_info: '회사 정보',
  },
  [Languages.VE]: {
    greeting: '{{name}}, xin chào!',
    register_company: 'Đăng ký công ty',
    register_sign: 'Đăng ký chữ ký',
    my_companies: 'Công ty của tôi',
    total_companies: 'Tổng cộng {{count}} công ty',
    company_info: 'Thông tin công ty',
  },
};
