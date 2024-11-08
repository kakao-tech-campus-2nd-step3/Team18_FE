import { http, HttpResponse } from 'msw';
import { APIPath } from '@/apis/apiPath';

export const postApplyMockHandler = [
  http.post(`${APIPath.apply}`, async ({ request, params }) => {
    const { id } = params;
    const req = await request.json();
    return HttpResponse.json({ req, id }, { status: 201 });
  }),
];
