import { APIPath } from '@/apis/apiPath';
import { http, HttpResponse } from 'msw';

export const visaMockHandler = [
  http.put(APIPath.registerVisa, async ({ request }) => {
    const req = await request.json();
    return HttpResponse.json(req, { status: 200 });
  }),
];
