import { http, HttpResponse } from 'msw';
import { getApply } from '../apply/useApplyHook';

export const postApplyMockHandler = [
  http.post(`${getApply()}/:id`, async ({ request, params }) => {
    const { id } = params;
    const req = await request.json();
    return HttpResponse.json({ req, id }, { status: 201 });
  }),
];
