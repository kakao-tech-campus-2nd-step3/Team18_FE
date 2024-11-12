import { Languages } from '../Languages';

export const signUpModalData = {
  [Languages.KO]: {
    common: {
      requiredMessage: '정보를 입력해주세요.',
      laterMessage: '* 추후 마이페이지에서 수정 할 수 있습니다.',
    },
    detailMessage: {
      employer: `이력서에 대한 정보가 필요해요.\n이력서 정보를 등록하러 가실까요?`,
      employee: `사업장에 대한 정보가 필요해요.\n사업주 정보를 등록하러 가실까요?`,
    },
    buttons: {
      submit: '등록할게요',
      cancel: '괜찮아요',
    },
  },
  [Languages.VE]: {
    common: {
      requiredMessage: 'Vui lòng nhập thông tin.',
      laterMessage: '* Bạn có thể chỉnh sửa sau trong trang cá nhân.',
    },
    detailMessage: {
      employer: `Cần thông tin về hồ sơ.\nBạn có muốn đăng ký thông tin hồ sơ không?`,
      employee: `Cần thông tin về doanh nghiệp.\nBạn có muốn đăng ký thông tin doanh nghiệp không?`,
    },
    buttons: {
      submit: 'Tôi sẽ đăng ký',
      cancel: 'Không sao đâu',
    },
  },
};
