import { APIPath } from '@/apis/apiPath';
import { requiredFieldCheckData } from './requiredFieldCheckData';
import { http, HttpResponse } from 'msw';

export const requiredFieldCheckMockHandler = [
  http.get(APIPath.requiredFieldCheck, () => HttpResponse.json(requiredFieldCheckData)),
];
