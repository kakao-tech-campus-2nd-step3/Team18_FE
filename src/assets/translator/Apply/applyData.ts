import { Languages } from '../Languages';

export const applyData = {
  [Languages.KO]: {
    title: '지원서 작성',
    name: '이름',
    address: '주소',
    phoneNumber: '번호',
    applyMotivation: '지원동기',
    description: {
      name: '이름을 입력해주세요.',
      address: '주소를 입력해주세요 (예: 대전광역시 유성구 궁동)',
      phoneNumber: '번호를 입력해주세요 (예: 010-0000-0000)',
      applyMotivation: '지원동기를 입력해주세요',
    },
    errors: '을(를) 입력해주세요!',
    numberError: '올바른 전화번호 형식이 아닙니다. (예: 010-0000-0000)',
    submit: '지원하기',
    submitMent: '정말 지원하시겠습니까?',
  },
  [Languages.VE]: {
    title: 'Đơn ứng tuyển',
    name: 'Họ và tên',
    address: 'Địa chỉ',
    phoneNumber: 'Số điện thoại',
    applyMotivation: 'Động lực ứng tuyển',
    description: {
      name: 'Vui lòng nhập họ và tên.',
      address: 'Vui lòng nhập địa chỉ (ví dụ: Quận Cẩm Lệ, Thành phố Đà Nẵng)',
      phoneNumber: 'Vui lòng nhập số điện thoại (ví dụ: 010-0000-0000)',
      applyMotivation: 'Vui lòng nhập động lực ứng tuyển',
    },
    errors: 'Vui lòng nhập!',
    numberError: 'Số điện thoại không đúng định dạng. (ví dụ: 010-0000-0000)',
    submit: 'Nộp đơn',
    submitMent: 'Bạn có chắc chắn muốn ứng tuyển không?',
  },
};
