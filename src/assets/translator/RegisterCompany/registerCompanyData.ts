import { Languages } from '../Languages';

export const registerCompanyData = {
  [Languages.KO]: {
    TITLE: '회사 등록',
    LOGOIMAGE: '회사 이미지 업로드(선택)',
    COMPANYNAME: '회사명',
    INDUSTRY_OCCUPATION: '업직종',
    BRAND: '브랜드',
    REVENUE_PERYEAR: '연 평균 매출액',
    SUBMIT: '등록하기',
    SUBMIT_CHECK: '회사를 등록하시겠습니까?',
    ERROR: {
      COMPANYNAME: '회사명을 입력해주세요.',
      INDUSTRY_OCCUPATION: '산업/직종을 입력해주세요.',
      BRAND: '브랜드명을 입력해주세요.',
      REVENUE_PERYEAR: '연 매출을 입력해주세요.',
      NUMBER: '숫자로 입력해주세요.',
    },
  },
  [Languages.VE]: {
    TITLE: 'Đăng ký công ty',
    LOGOIMAGE: 'Tải lên logo công ty (tùy chọn)',
    COMPANYNAME: 'Tên công ty',
    INDUSTRY_OCCUPATION: 'Ngành nghề',
    BRAND: 'Thương hiệu',
    REVENUE_PERYEAR: 'Doanh thu hàng năm',
    SUBMIT: 'Đăng ký',
    SUBMIT_CHECK: 'Bạn có muốn đăng ký công ty không?',
    ERROR: {
      COMPANYNAME: 'Vui lòng nhập tên công ty.',
      INDUSTRY_OCCUPATION: 'Vui lòng nhập ngành nghề.',
      BRAND: 'Vui lòng nhập tên thương hiệu.',
      REVENUE_PERYEAR: 'Vui lòng nhập doanh thu hàng năm.',
      NUMBER: 'Vui lòng nhập bằng số.',
    },
  },
};
