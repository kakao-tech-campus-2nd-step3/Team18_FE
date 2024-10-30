import { APIPath } from '@/apis/apiPath';
import { applicantList } from '@/pages/applicants/index.mock';
import { http, HttpResponse } from 'msw';

export const myApplicantsMockHandler = [http.get(APIPath.getMyApplicants, () => HttpResponse.json(applicantList))];
