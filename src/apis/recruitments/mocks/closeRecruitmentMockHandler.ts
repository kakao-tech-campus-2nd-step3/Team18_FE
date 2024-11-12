import { APIPath } from '@/apis/apiPath';
import { http, HttpResponse } from 'msw';

export const closeRecruitmentMockHandler = [
  http.post(APIPath.closeRecruitment, async ({ params }) => {
    const { recruitmentId } = params;

    if (!recruitmentId) {
      return HttpResponse.json({ message: '잘못된 요청입니다.' }, { status: 400 });
    }

    return HttpResponse.json({ message: '마감 완료' }, { status: 200 });
  }),
];
