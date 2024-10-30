import { APIPath } from '@/apis/apiPath';
import { recruitmentDetailList } from './recruitmentsDetailList';
import { http, HttpResponse } from 'msw';

export const recruitmentsDetailMockHandler = [
  http.get(APIPath.recruitmentsDetail, () => HttpResponse.json(recruitmentDetailList)),
];
