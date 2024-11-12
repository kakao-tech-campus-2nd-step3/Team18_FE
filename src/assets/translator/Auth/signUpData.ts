import { Languages } from '../Languages';

export const signUpData = {
  [Languages.KO]: {
    heading: '가입자 정보 선택',
    description: '대상에 해당하는 가입자 정보를 선택해주세요.',
    buttons: {
      employer: '사업주 가입',
      employee: '근로자 가입',
    },
  },
  [Languages.VE]: {
    heading: 'Chọn thông tin người đăng ký',
    description: 'Vui lòng chọn thông tin người đăng ký phù hợp với đối tượng.',
    buttons: {
      employer: 'Đăng ký chủ doanh nghiệp',
      employee: 'Đăng ký người lao động',
    },
  },
};
