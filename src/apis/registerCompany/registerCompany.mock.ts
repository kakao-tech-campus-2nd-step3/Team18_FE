import { http, HttpResponse } from 'msw';
import { getPostCompanyPath } from './useRegisterCompany';

export const registerCompanyMockHandler = [
  http.post(getPostCompanyPath(), async ({ request }) => {
    const req = await request.json();
    return HttpResponse.json(req, { status: 201 });
  }),
];
