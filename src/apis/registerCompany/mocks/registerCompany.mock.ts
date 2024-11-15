import { http, HttpResponse } from 'msw';
import { getPostCompanyPath } from '../hooks/useRegisterCompany';

export const registerCompanyMockHandler = [
  http.post(getPostCompanyPath(), async ({ request }) => {
    const req = await request.formData();
    return HttpResponse.json(req, { status: 201 });
  }),
];
