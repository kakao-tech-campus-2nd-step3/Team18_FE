import { APIPath } from '@/apis/apiPath';
import { companyList } from '@/pages/myPage/employer/EmployerMyPage.mock';
import { http, HttpResponse } from 'msw';

export const myCompaniesMockHandler = [http.get(APIPath.getMyCompanies, () => HttpResponse.json(companyList))];
