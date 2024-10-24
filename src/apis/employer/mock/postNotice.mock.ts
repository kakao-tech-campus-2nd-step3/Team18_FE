import { http, HttpResponse } from 'msw';
import { getPostNoticePath } from '../hooks/usePostNotice';

export const noticesMockHandler = [
  http.post(getPostNoticePath(), async ({ request }) => {
    // 가로챈 요청 바디를 JSON으로 읽기
    const req = await request.json();
    HttpResponse.json(req, { status: 201 });
  }),
];
