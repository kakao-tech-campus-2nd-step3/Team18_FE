import { APIPath } from '@/apis/apiPath';
import { foreigner } from '@/features/applicants/ApplicantList/ContractModal/index.mock';
import { http, HttpResponse } from 'msw';

export const foreignerMockHandler = [http.get(APIPath.getForeigner, () => HttpResponse.json(foreigner))];
