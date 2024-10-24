import { http, HttpResponse } from 'msw';
import { getMyApplicationPath } from '../hooks/useGetMyApplication';
import { myRecruitList } from '@/pages/employee/myPage/data/index.mock';

export const EmployeePageMockHandler = [
  http.get(getMyApplicationPath(), () => {
    return HttpResponse.json(myRecruitList);
  }),
];
