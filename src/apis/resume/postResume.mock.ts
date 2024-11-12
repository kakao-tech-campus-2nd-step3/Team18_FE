import { http, HttpResponse } from 'msw';
import { APIPath } from '@/apis/apiPath';

export const postResumeMockHandler = [
  http.post(`${APIPath.resume}`, async ({ request }) => {
    const req = await request.json();
    return HttpResponse.json({ req }, { status: 201 });
  }),
];
