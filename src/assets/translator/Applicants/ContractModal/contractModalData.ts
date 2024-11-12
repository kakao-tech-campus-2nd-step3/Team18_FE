import { Languages } from '../../Languages';

export const contractModalData = {
  [Languages.KO]: {
    title: '고용주님께 드리는 주의사항',
    warning: '불법 체류자를 고용할 시 최대 200만원의 범칙금이 부과될 수 있습니다.',
    applicant_info: '지원자 정보',
    foreigner_number: '외국인 등록 번호',
    visa_generate_date: '비자 발급 일자',
    message: {
      part1: '이 지원자의 정보를 활용하여 <0>Hi Korea</0>에서 지원자에 대한 불법 체류 여부를 검증할 수 있습니다.',
      part2: '안전한 고용을 위해 확인 후 진행하는 것을 권장합니다.',
    },
    buttons: {
      confirm: '확인하였습니다.',
      cancel: '취소',
    },
  },
  [Languages.VE]: {
    title: 'Lời khuyên dành cho nhà tuyển dụng',
    warning: 'Nếu thuê người lưu trú bất hợp pháp, bạn có thể bị phạt tối đa 2 triệu won.',
    applicant_info: 'Thông tin ứng viên',
    foreigner_number: 'Số đăng ký người nước ngoài',
    visa_generate_date: 'Ngày cấp visa',
    message: {
      part1:
        'Bạn có thể sử dụng thông tin của người này để kiểm tra tình trạng cư trú bất hợp pháp tại <0>Hi Korea</0>.',
      part2: 'Chúng tôi khuyến nghị bạn kiểm tra kỹ trước khi tiến hành để đảm bảo an toàn trong việc tuyển dụng.',
    },
    buttons: {
      confirm: 'Tôi đã hiểu',
      cancel: 'Hủy bỏ',
    },
  },
};
