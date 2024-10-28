import { APIPath } from '@/apis/apiPath';
import { companyList } from '@/pages/myAccount/employer/index.mock';
import { http, HttpResponse } from 'msw';

export const myCompaniesMockHandler = [http.get(APIPath.getMyCompanies, () => HttpResponse.json(companyList))];
