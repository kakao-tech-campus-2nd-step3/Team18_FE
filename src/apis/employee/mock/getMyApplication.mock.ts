import { http, HttpResponse } from 'msw';
import { getMyApplicationPath } from '../hooks/useGetMyApplication';
import { myApplicationList } from '@/apis/employee/mock/myApplicationList.mock';

export const EmployeePageMockHandler = [
  http.get(getMyApplicationPath(), () => {
    return HttpResponse.json(myApplicationList);
  }),
];
