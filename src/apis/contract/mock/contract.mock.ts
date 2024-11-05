import { http, HttpResponse } from 'msw';
import { getPostContractPath } from '../hooks/usePostContract';
import { getMyContractPath } from '../hooks/useGetMyContract';
import { getPostSignEmployeeContractPath } from '../hooks/usePostEmployeeSign';

export const contractsMockHandler = [
  http.post(getPostContractPath(), async ({ request }) => {
    const req = await request.json();
    return HttpResponse.json(req, { status: 201 });
  }),

  http.get(getMyContractPath(1), () => HttpResponse.json(CONTRACT_DATA)),

  http.post(getPostSignEmployeeContractPath(), async ({ request }) => {
    const req = await request.json();
    return HttpResponse.json(req, { status: 201 });
  }),
];

const CONTRACT_DATA = {
  salary: '월 2백만원',
  workingHours: '월화수 10:00 ~ 15:00, 목금 12:00 ~ 16:00',
  dayOff: '매월 마지막주 화요일',
  annualPaidLeave: '통상근로자의 근로시간에 비례하여 연차유급휴가를 부여한다.',
  workingPlace: '대전 유성구 궁동 대학로99',
  responsibilities: '개발하기',
  rule: '열심히 일하기!',
};
